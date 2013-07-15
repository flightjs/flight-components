define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(dataFlightComponents);

  function dataFlightComponents() {
    this.defaultAttrs({
      url: 'http://bower-component-list.herokuapp.com/',
      matchRegex: /^flight-/,
      except: []
    });

    this.filterComponents = function (components, regex) {
      return components.filter(function (component) {
        return component.name.match(regex) && this.notInExceptions(component.name)
      }.bind(this));
    }

    this.notInExceptions = function (name) {
      return $.inArray(name, this.attr.except) == -1;
    }

    this.errorCallback = function (data) {
      this.trigger("flight-components-error", {
        error: data
      });
    };

    this.successCallback = function (data) {
      this.trigger("flight-components-served", {
        components: this.filterComponents(data, this.attr.matchRegex)
      });
    };

    this.fetchComponents = function () {
      $.ajax({
        context: this,
        dataType: 'json',
        url: this.attr.url,
        success: this.successCallback,
        error: this.errorCallback
      });
    };

    this.after('initialize', function () {
      this.on(document, "needs-flight-components", this.fetchComponents);
    });
  }

});
