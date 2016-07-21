angular.module('bbInterviewApp').controller('BrewDetailCtrl', [
                                                                '$scope',
                                                                '$http',
                                                                '$rootScope',
                                                                'bbModal',
                                                                'LocationService',
                                                                'BreweryService',
                                                                function($scope,
                                                                         $http,
                                                                         $rootScope,
                                                                         bbModal,
                                                                         locationService,
                                                                         breweryService) {
  'use strict'

  $scope.selected = {}
  $scope.tileHeader = 'Brewery Finder'
  $scope.templateFile = 'render/grid.html'

  $http.get('resources/states.json').success(function(data) {
    $scope.states = data
  })

  $scope.getBreweryList = function() {
    $rootScope.waitingState = true
    var state = $scope.selected.state === undefined ? '' : $scope.selected.state.name
    locationService.getBreweriesByState(state, function(data) {
      setupBreweryGrid(data)
      $rootScope.waitingState = false 
    })
  }

  $scope.openDetails = function(breweryId) {
      breweryService.setCurrentBreweryDetailId(breweryId) 
      bbModal.open({
        controller: 'BrewModalCtrl', 
        templateUrl: 'bbInterview/modalTitle.html'
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
          width_all: 84,
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
          name: 'Url',
          width_all: 300,
          template_url: 'bbInterview/linkTemplate.html'
        },
        {
          caption: 'Details',
          jsonmap: '',
          id: 6,
          width_all: 100,
          template_url: 'bbInterview/detailButtonTemplate.html',
          controller: 'BrewDetailCtrl'
        }
      ],
      data: data.data || [],
      sortOptions: {},
      selectedColumnIds: [1, 2, 3, 4, 5, 6]
    }
  
  }

}])
