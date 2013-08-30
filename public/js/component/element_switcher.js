define(function (require) {

  'use strict';

  return defineComponent(loaderSwitcher);

  function loaderSwitcher() {
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
    });
  }

});
