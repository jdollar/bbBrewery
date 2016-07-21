angular.module('bbInterviewApp').controller('BeerModalCtrl', ['$scope', 'BreweryService', function($scope, breweryService) {
  $scope.tileHeader = 'Beers'
  $scope.grid = {}

  breweryService.getBreweryBeers(function(data) {
    setupBeerGrid(data) 
  })

  function setupBeerGrid(data) {  
    $scope.grid.beerGrid = {
      columns: [
        {
          caption: 'Label',
          jsonmap: 'labels.icon',
          id: 1,
          name: 'label',
          template_url: 'bbInterview/labelTemplate.html'
        },
        {
          caption: 'Name',
          jsonmap: 'name',
          id: 2,
          name: 'name'
        },
        {
          caption: 'Glass',
          jsonmap: 'glass.name',
          id: 3,
          name: 'glass'
        }
      ],
      data: data.data,
      sortOptions: {},
      selectedColumnIds: [1, 2, 3]
    }
  }
}])
