angular.module('bbInterviewApp').controller('BrewDetailCtrl', ['$scope', '$http', 'LocationService', function($scope, $http, locationService) {
  'use strict'

  $scope.selected = {}

  $http.get('resources/states.json').success(function(data) {
    $scope.states = data
  })

  $scope.getBreweryList = function() {
    var state = $scope.selected.state === undefined ? '' : $scope.selected.state.name
    locationService.getBreweriesByState(state, function(data) {
      console.log(data)
      setupBreweryGrid(data)
    })
  }

function setupBreweryGrid(data) {  
  $scope.breweryDetails = {
    columns: [
      {
        caption: 'Icon',
        jsonmap: 'brewery.images.icon',
        id: 1,
        name: 'icon',
        template_url: 'bbInterview/iconTemplate.html'
      },
      {
        caption: 'Name',
        jsonmap: 'brewery.name',
        id: 2,
        name: 'name'
      },
      {
        caption: 'Address',
        jsonmap: 'streetAddress',
        id: 3,
        name: 'Address'
      },
      {
        caption: 'State',
        jsonmap: 'region',
        id: 4,
        name: 'State'
      },
      {
        caption: 'Url',
        jsonmap: 'website',
        id: 5,
        name: 'Url'
      }
    ],
    data: data.data,
    sortOptions: {},
    selectedColumnIds: [1, 2, 3, 4, 5]
  }

}

}])
