define(function (require) {

  'use strict';

  var flightComponents = require('bower_components/flight-components/lib/flight-components');
  var uiFlightComponents = require('component/ui_flight_components');
  var uiResultFilter = require('component/ui_result_filter');
  var uiTopComponentsList = require('component/ui_top_components_list');

  return initialize;

  function initialize() {
    $('#filter').focus();

    flightComponents.attachTo('#components', {
      except: ['flight-jasmine', 'flight-mocha']
    });

    uiResultFilter.attachTo("#filter", {
      resultSelector: '#components'
    });


    uiTopComponentsList.attachTo('#top-stars', {
      compare: 'stars'
    });

    uiTopComponentsList.attachTo('#top-forks', {
      compare: 'forks'
    });

    uiFlightComponents.attachTo('#components');
  }

});
