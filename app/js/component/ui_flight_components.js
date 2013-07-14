define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var Mustache = require('mustache/mustache');

  return defineComponent(uiFlightComponents);

  function uiFlightComponents() {
    this.defaultAttrs({
    });

    this.htmlFor = function (component) {
      return Mustache.render("<tr class='component'><td class='name'><a href='{{website}}'>{{name}}</a></td> <td>{{owner}}</td> <td>{{forks}}</td> <td>{{stars}}</td> </tr>", component);
    }

    this.updateList = function (ev, data) {
      data.components.forEach(function(component) {
        this.$node.append(this.htmlFor(component));
      }.bind(this));
      this.trigger("UIFlightComponentsReady");
    };

    this.filterList = function (ev, data) {
      this.$node.find('.component').each(function () {
        var name = $(this).find('.name').text();
        if (name.match(data.matchRegex)) {
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      });
    };

    this.after('initialize', function () {
      this.trigger("needs-flight-components");
      this.on("flight-components-served", this.updateList);
      this.on(document, "UIFilterFlightComponents", this.filterList);
    });
  }

});
