define(["vue", "./components/Hello", "./components/Hello2", "./router"], function (_vue, _Hello, _Hello2, _router) {
  "use strict";

  _vue = _interopRequireDefault(_vue);
  _Hello = _interopRequireDefault(_Hello);
  _Hello2 = _interopRequireDefault(_Hello2);
  _router = _interopRequireDefault(_router);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var app = new _vue.default({
    el: '#app',
    router: _router.default,
    data: {
      message: 'Hello Vue!'
    },
    components: {
      Hello2: _Hello2.default
    }
  });
});