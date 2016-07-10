describe('BrewDetailTestCtrl', function() {
  var $scope, httpBackend, mockLocationService, mockBreweryService, mockBbModal
  var sampleStateData = [{abbreviation: 'US', name: 'United States'}]

  beforeEach(module('bbInterviewApp'))

  beforeEach(inject(function($rootScope, $controller, $http, $httpBackend) {
    $scope = $rootScope.$new()

    mockLocationService = {

    }

    mockBreweryService = {

    }

    mockBbModal = {

    }

    httpBackend = $httpBackend
    httpBackend.when('GET', 'resources/states.json').respond(sampleStateData)

    $controller('BrewDetailCtrl', {$scope: $scope, $http: $http, $rootScope: $rootScope, bbModal: mockBbModal, LocationService: mockLocationService, BreweryService: mockBreweryService})
  }))

  it('tile header for modal', function() {
    expect($scope.tileHeader).toEqual('Brewery Finder')
  })

  it('template file should load grid partial', function() {
    expect($scope.templateFile).toEqual('render/grid.html')
  })

  it('state.json call sets scope.states', function() {
    httpBackend.flush()
    expect($scope).toBeDefined()
    expect($scope.states).toEqual(sampleStateData)
  })

  it('tries calling service', function() {
    //$scope.getBreweryList()
  })
})
