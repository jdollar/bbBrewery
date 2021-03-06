angular.module('bbInterviewApp').controller('BrewModalCtrl', ['$scope', 'BreweryService', function($scope, breweryService) {
  $scope.templateFile = 'render/detail.html'

  $scope.map = {}
  $scope.breweryDetails = {}

  breweryService.getBreweryDetails(function(data) {
    $scope.breweryDetails = data.data
    $scope.modalHeaderTitle = 'Brewery Detail - ' + data.data.nameShortDisplay
  })

  breweryService.getBreweryLocation(function(data) {
    $scope.map.latitude = data.data.latitude
    $scope.map.longitude = data.data.longitude
    $scope.map.size = '500x300'
  })
}])
