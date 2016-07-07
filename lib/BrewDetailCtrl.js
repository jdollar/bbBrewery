angular.module('bbInterviewApp').controller('BrewDetailCtrl', ['$scope', '$http', 'LocationService', function($scope, $http, locationService) {
  'use strict'

  $http.get('resources/states.json').success(function(data) {
    $scope.states = data
  })

  $scope.getBreweryList = function(state) {
    locationService.getBreweriesByState(state, function(data) {
      console.log(data)
    })
  }
}])
