define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var Mustache = require('mustache/mustache');

  return defineComponent(uiFlightComponents);

  function uiFlightComponents() {
    this.defaultAttrs({
    });

    this.htmlFor = function (component) {
      return Mustache.render("<tr><td><a href='{{website}}'>{{name}}</a></td> <td>{{owner}}</td> <td>{{forks}}</td> <td>{{stars}}</td> </tr>", component);
    }

    this.updateList = function (ev, data) {
      data.components.forEach(function(component) {
        this.$node.append(this.htmlFor(component));
      }.bind(this));
    };

    this.after('initialize', function () {
      this.trigger("UINeedsFlightComponents");
      this.on("DataFlightComponentsServed", this.updateList);
    });
  }

});
