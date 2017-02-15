module.exports = {
  path: 'index',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/welcome'));
    })
  }
};
