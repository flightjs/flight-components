define(function (require) {

  'use strict';

   var dataFlightComponents = require('component/data_flight_components');
   var uiFlightComponents = require('component/ui_flight_components');
   var uiResultFilter = require('component/ui_result_filter');

  return initialize;

  function initialize() {
     uiResultFilter.attachTo("#filter", {
       resultSelector: '#components'
     });
     dataFlightComponents.attachTo('#components');
     uiFlightComponents.attachTo('#components');
  }

});
