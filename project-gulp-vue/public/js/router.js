define(["exports", "vue", "../lib/vue-router", "./components/index"], function (_exports, _vue, _vueRouter, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _vue = _interopRequireDefault(_vue);
  _vueRouter = _interopRequireDefault(_vueRouter);
  _index = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _vue.default.use(_vueRouter.default);

  const Foo = {
    template: "<div>foo</div>"
  };
  const Bar = {
    template: "<div>bar</div>"
  };
  const routes = [{
    path: "/",
    redirect: {
      name: "foo"
    }
  }, {
    name: "foo",
    path: "/foo",
    component: _index.default
  }, {
    path: "/bar",
    component: Bar
  }];

  var _default = new _vueRouter.default({
    routes // (缩写) 相当于 routes: routes

  });

  _exports.default = _default;
});