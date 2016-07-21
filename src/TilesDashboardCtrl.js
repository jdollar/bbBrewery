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
      id: 'beer',
      view_name: 'beer',
      collapsed: false,
      collapsed_small: true
    }
  ]

  $scope.breweryLayout = {
    one_column_layout: [
      'default'
    ],
    two_column_layout: [
      'default'
    ]
  }

  $scope.detailLayout = {
    one_column_layout: [
      'beer'
    ],
    two_column_layout: [
      'beer'
    ]
  }
}])
