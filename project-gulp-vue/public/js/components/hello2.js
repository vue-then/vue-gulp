define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    template: '<div class="hello2">{{ greeting }} <span>{{ name }}</span>!</div>',

    beforeCreate() {
      loadCss({
        content: '.hello2 {color: red;}.hello2 span {color: green;}'
      });
    },

    props: ['name'],

    data() {
      return {
        greeting: 'Hello2'
      };
    }

  };
  _exports.default = _default;
});