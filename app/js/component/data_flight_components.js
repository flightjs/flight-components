define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(dataFlightComponents);

  function dataFlightComponents() {
    this.defaultAttrs({
      url: 'http://bower-component-list.herokuapp.com/',
      matchRegex: /^flight-/
    });

    this.filterComponents = function (components, regex) {
      return components.filter(function (component) {
        return component.name.match(regex);
      });
    }

    this.fetchComponents = function () {
      $.getJSON(this.attr.url, function (data) {
        this.trigger("DataFlightComponentsServed", {
          components: this.filterComponents(data, this.attr.matchRegex)
        } );
      }.bind(this));
    };

    this.after('initialize', function () {
      this.on("UINeedsFlightComponents", this.fetchComponents);
    });
  }

});
