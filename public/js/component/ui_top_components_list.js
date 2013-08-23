define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var underscore = require('bower_components/underscore-amd/underscore');
  var Mustache = require('mustache/mustache');

  return defineComponent(uiTopComponentsList);

  function uiTopComponentsList() {
    this.defaultAttrs({
      compare: '',
      compareFunction: function (compare) { return compare; },
      displayFunction: function (stat) { return stat; },
      maxItems: 5
    });

    this.orderComponents = function (components, decreasingOrder) {
      return _.sortBy(components, function (component) {
        return -1 * this.attr.compareFunction(component[this.attr.compare]);
      }.bind(this));
    };

    this.getTopComponents = function (ev, data) {
      var orderedComponents = this.orderComponents(data.components, this.attr.decreasingOrder).
        slice(0, this.attr.maxItems);
      this.trigger('top-components-served', { components: orderedComponents });
    };


    this.htmlFor = function (component) {
      component.stat = this.attr.displayFunction(component[this.attr.compare]);
      return Mustache.render(
          "<li><a href='{{website}}'>{{name}}" +
          "<span class='stat'>{{stat}}</span></a></li>"
          , component);
    };
    this.displayTopList = function (ev, data) {
      data.components.forEach(function (component) {
        this.$node.append(this.htmlFor(component));
      }.bind(this));
    };

    this.after('initialize', function () {
      this.on(document, "flight-components-served", this.getTopComponents);
      this.on("top-components-served", this.displayTopList);
    });
  }
});

