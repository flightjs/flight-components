define(function (require) {

  'use strict';

  var flightComponents = require('bower_components/flight-components/lib/flight-components');
  var uiFlightComponents = require('component/ui_flight_components');
  var uiResultFilter = require('component/ui_result_filter');

  return initialize;

  function initialize() {
    $('#filter').focus();
    uiResultFilter.attachTo("#filter", {
      resultSelector: '#components'
    });
    flightComponents.attachTo('#components');
    uiFlightComponents.attachTo('#components');
  }

});
