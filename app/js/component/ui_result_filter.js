define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(uiResultFilter);

  function uiResultFilter() {
    this.defaultAttrs({
      selector: 'input',
    });

    this.filter = function (ev) {
      var text = $(ev.target).val();
      this.trigger("ui-filter-flight-components", { matchRegex: new RegExp(text, 'i') });
    };

    this.after('initialize', function () {
      this.on("keyup", this.filter);
    });
  }

});
