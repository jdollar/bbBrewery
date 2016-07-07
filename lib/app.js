(function() {
  'use strict'
  angular.module('bbInterviewApp', ['sky'])
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
    })
  
})()
