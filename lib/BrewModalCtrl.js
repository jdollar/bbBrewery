angular.module('bbInterviewApp').controller('BrewModalCtrl', ['$scope', 'bbModal', 'ConfigService', 'BreweryService', function($scope, bbModal, configService, breweryService) {
  $scope.center = {}
  $scope.breweryDetails = {}
  $scope.grid = {}
  //$scope.markers = {}
  //$scope.grid = {}

  breweryService.getBreweryBeers(function(data) {
    setupBeerGrid(data) 
  })

  breweryService.getBreweryDetails(function(data) {
    $scope.breweryDetails = data.data
  })

  $scope.openDetails = function(breweryId) {
    //breweryService.getBreweryDetails(breweryId, function(data) {
    //  setupBeerGrid(data)
    //})


    //breweryService.getBreweryLocation(breweryId, function(data) {
    //  console.log('test')
    //  var latitude = data.data.latitude
    //  var longitude = data.data.longitude

    //  var locationMark = {
    //    lat: latitude,
    //    lon: longitude,
    //    focus: true,
    //    message: '',
    //    draggable: false
    //  }

    //  angular.extend($scope, {
    //    center: {
    //      lat: latitude,
    //      lng: longitude,
    //      zoom: 8
    //    },
    //    markers: {
    //      mainMarker: angular.copy(locationMark)
    //    },
    //    position: {
    //      lat: latitude,
    //      lng: longitude
    //    },
    //    events: {}
    //  })

    //  console.log($scope.local)

    //})     


  }

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
