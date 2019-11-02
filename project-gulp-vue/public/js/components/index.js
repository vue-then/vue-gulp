define(["exports", "vue"], function (_exports, _vue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _vue = _interopRequireDefault(_vue);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = _vue.default.component('index', {
    template: '<div class="index">{{ greeting }} <span></span>!</div>',

    beforeCreate() {
      loadCss({
        content: '.index{color:red}.index span{color:blue}'
      });
    },

    data() {
      return {
        greeting: 'index'
      };
    }

  });

  _exports.default = _default;
});