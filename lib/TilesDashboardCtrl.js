angular.module('bbInterviewApp').controller('TilesDashboardCtrl', ['$scope', function($scope) {
  $scope.tiles = [
    {
      id: 'default', 
      view_name: 'breweryFinder',
      collapsed: false,
      collapsed_small: true
    }
  ]

  $scope.breweryDetailTiles = [
    {
      id: 'beers',
      view_name: 'beers',
      collapsed: false,
      collapsed_small: true
    }
  ]

  $scope.layout = {
    one_column_layout: [
      'default'
    ],
    two_column_layout: [
      'default'
    ]
  }
}])
