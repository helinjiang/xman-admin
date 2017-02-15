module.exports = {
  path: 'customer',

  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./list'),
        require('./add'),
      ]);
    })
  },

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/container'))
    })
  },

  indexRoute: {
    onEnter(nextState, replace) {
      return replace({pathname: '/customer/list'});
    }
  },

};