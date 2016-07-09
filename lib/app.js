(function() {
  'use strict'
  angular.module('bbInterviewApp', ['sky'])
    .config(function($stateProvider) {
      $stateProvider
        .state('tiledashboard', {
          url: '',
          views: {
            'breweryFinder': {
              controller: 'BrewDetailCtrl',
              templateUrl: 'bbInterview/tile.html'
            }
          }
        })
    })
    .run(['$rootScope', function($rootScope) {
      $rootScope.waitingState = false
    }])
  
})()
