define(["exports", "vue"], function (_exports, _vue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _vue = _interopRequireDefault(_vue);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = _vue.default.component('hello', {
    template: '<div class="hello">{{ greeting }} <span><slot></slot></span>!</div>',

    beforeCreate() {
      loadCss({
        content: '.hello{color:red}.hello span{color:blue}'
      });
    },

    data() {
      return {
        greeting: 'Hello'
      };
    }

  });

  _exports.default = _default;
});