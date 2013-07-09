define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(uiFlightComponents);

  function uiFlightComponents() {
    this.defaultAttrs({

    });

    this.updateList = function (ev, data) {
      data.components.forEach(function(component) {
        console.log(component);
      });
    };

    this.after('initialize', function () {
      this.trigger("UINeedsFlightComponents");
      this.on("DataFlightComponentsServed", this.updateList);
    });
  }

});
