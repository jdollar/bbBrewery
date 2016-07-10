describe('BrewModalCtrl', function() {
  var $scope, mockBreweryService
  var sampleMapData = {data: {latitude: 10, longitude: 11}}
  var sampleBreweryData = {data: {name: 'testName', nameShortDisplay: 'testShortName'}}

  beforeEach(module('bbInterviewApp'))

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new()

    mockBreweryService = {
      getBreweryDetails: function(callback) {
        callback(sampleBreweryData)
      },
      getBreweryLocation: function(callback) {
        callback(sampleMapData)
      }
    }

    spyOn(mockBreweryService, 'getBreweryDetails').and.callThrough()
    spyOn(mockBreweryService, 'getBreweryLocation').and.callThrough()
    $controller('BrewModalCtrl', {$scope: $scope, BreweryService: mockBreweryService})
  }))

  it('has correct template file', function() {
    expect($scope.templateFile).toEqual('render/detail.html')
  })

  it('inits map and details', function() {
    expect($scope.map).toBeDefined()
    expect($scope.breweryDetails).toBeDefined()
  })

  it('sets breweryDetails', function() {
    expect(mockBreweryService.getBreweryDetails).toHaveBeenCalled()
    expect($scope.breweryDetails).toEqual(sampleBreweryData.data) 
  })

  it('sets modalHeaderTitle', function() {
    expect(mockBreweryService.getBreweryDetails).toHaveBeenCalled()
    expect($scope.modalHeaderTitle).toEqual('Brewery Detail - ' + sampleBreweryData.data.nameShortDisplay) 
  })

  it('sets scope map values for google static url', function() {
    expect(mockBreweryService.getBreweryLocation).toHaveBeenCalled()
    expect($scope.map.latitude).toEqual(sampleMapData.data.latitude)
    expect($scope.map.longitude).toEqual(sampleMapData.data.longitude)
    expect($scope.map.size).toEqual('500x300')
  })
})
