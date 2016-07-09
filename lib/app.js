(function() {
  'use strict'
  angular.module('bbInterviewApp', ['sky'/*, 'leaflet-directive'*/])
    .config(function($stateProvider) {
      $stateProvider
        .state('grid', {
          url: '',
          views: {
            'breweryFinder': {
              controller: 'BrewDetailCtrl',
              templateUrl: 'bbInterview/breweryFinder.html'
            }
          },
        })
        //.state('beers', {
        //  url: '',
        //  views: {
        //    'beers': {
        //      controller: 'BrewModuleCtrl',
        //      templateUrl: 'bbInterview/beerList.html'
        //    }
        //  }
        //})
    })
    .run(['$rootScope', function($rootScope) {
      $rootScope.waitingState = false
    }])
  
})()
