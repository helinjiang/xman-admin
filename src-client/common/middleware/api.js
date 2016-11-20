import $ from 'jquery';

const API_ROOT = '/admin';
const STATUS = 'storeStatus';

export const CALL_API = 'Call API';

export default store => next => action => {
  /**
   * opts 字段说明：
   *  url: CGI请求地址
   *  types: action的type值数组，按顺序依次代表: requestType, successType, failureType
   *  type: ajax的类型，get或者post
   *  data: 请求的参数对象
   *
   * @type {{url:String, types:String[], type:String, data:Object}}
   */
  const opts = action[CALL_API];

  if (typeof opts === 'undefined') {
    return next(action);
  }

  // 二次处理请求的opts中的参数
  const {url, type} = opts,
    [requestType, successType, failureType] = opts.types;

  opts.type = type ? type : 'GET';
  opts.url = ~url.indexOf(API_ROOT) ? url : API_ROOT + url;

  /**
   * 触发action
   * @param {Object} _action
   * @returns {*}
   */
  function actionWith(_action) {
    _action = Object.assign(action, _action);

    //'wait' 'fetching' 'success' 'fail'
    let obj = {
      [STATUS]: 'fetching'
    };

    switch (_action.type) {
      case successType:
        obj[STATUS] = 'success';
        break;
      case failureType:
        obj[STATUS] = 'fail';
    }

    if (obj[STATUS] !== 'fetching') {
      _action.data = Object.assign(_action.data || {}, obj);
    } else {
      _action.data = {};
    }

    const finalAction = _action;

    delete finalAction[CALL_API];

    return finalAction;
  }

  // 在请求发送之前，首先会触发 request 的action，表示要发送请求了
  let data = Object.assign({}, opts.data);

  next(actionWith({
    type: requestType,
    data,
  }));

  // 发送 ajax 请求
  return new Promise((resolve, reject) => {
    $.ajax({
      method: opts.type,
      url: opts.url,
      data: opts.data
    })
      .done((data) => {
        resolve(data);
      })
      .fail((data) => {
        reject(data);
      });
  })
    .then((data) => {
      let finalAction = actionWith({
        type: successType,
        data: data.data || data || {}
      });

      next(finalAction);

      if (typeof opts._onSuccess === 'function') {
        opts._onSuccess(data.data || data || {}, next);
      }

      return finalAction;
    })
    .catch((data) => {
      // ios8下面 stack会存在
      if (data && data.stack && !data.errno) {
        // error
        setTimeout(function () {
          throw data;
        }, 0);
      } else {
        let finalAction = actionWith({
          type: failureType,
          error: data
        });

        next(finalAction);

        if (typeof opts._onFail === 'function') {
          opts._onFail(data, next);
        }

        return Promise.reject(finalAction);
      }
    });

}
