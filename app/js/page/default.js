define(function (require) {

  'use strict';

   var dataFlightComponents = require('component/data_flight_components');
   var uiFlightComponents = require('component/ui_flight_components');

  return initialize;

  function initialize() {
     dataFlightComponents.attachTo('#components');
     uiFlightComponents.attachTo('#components');
  }

});
