(function() {
  'use strict'
  angular.module('bbInterviewApp', ['sky'])
    .config(function($stateProvider) {
      $stateProvider
        .state('tiledashboard', {
          url: '',
          views: {
            'breweryFinder': {
              controller: 'welcomeCtrl',
              templateUrl: 'bbInterview/breweryFinder.html'
            }
          },
        })
    })
  
})()
