define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(elementSwitcher);

  function elementSwitcher() {
    this.defaultAttrs({
      loaderSelector: '.loader',
      mainSelector: '.main'
    });

    this.showMain = function () {
      this.select('loaderSelector').hide();
      this.select('mainSelector').show();
    }

    this.showLoader = function () {
      this.select('mainSelector').hide();
      this.select('loaderSelector').show();
    }

    this.after('initialize', function () {
      this.on('loader-show-main', this.showMain);
      this.on('loader-show-loader', this.showLoader);
      this.on("flight-components-served", this.showMain);
    });
  }

});
