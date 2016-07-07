angular.module('bbInterviewApp').controller('TilesDashboardCtrl', ['$scope', function($scope) {
  $scope.tiles = [
    {
      id: 'default', 
      view_name: 'breweryFinder',
      collapsed: false,
      collapsed_small: true
    }
  ]
}])
