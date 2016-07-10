describe('BrewDetailTestCtrl', function() {
  var $scope, httpBackend, mockLocationService, mockBreweryService, mockBbModal
  var sampleStateData = [{abbreviation: 'US', name: 'United States'}]
  var sampleBreweryGridData = {data:[{icon: 'testIcon', brewery: {name: 'testBreweryName'}, streetAddress: 'testAddress', region: 'testRegion', website: 'website'}]}
  var sampleGridData = {
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
    data: sampleBreweryGridData.data,
    sortOptions: {},
    selectedColumnIds: [1, 2, 3, 4, 5, 6]
  }

  beforeEach(module('bbInterviewApp'))

  beforeEach(inject(function($rootScope, $controller, $http, $httpBackend) {
    $scope = $rootScope.$new()

    mockLocationService = {
      getBreweriesByState: function(state, callback) {
        callback(sampleBreweryGridData)
      }
    }

    mockBreweryService = {
      setCurrentBreweryDetailId: function(id) {

      }
    }

    mockBbModal = {
      open: function(config) {

      }
    }

    httpBackend = $httpBackend
    httpBackend.when('GET', 'resources/states.json').respond(sampleStateData)
    spyOn(mockLocationService, 'getBreweriesByState').and.callThrough()
    spyOn(mockBbModal, 'open').and.callThrough()
    spyOn(mockBreweryService, 'setCurrentBreweryDetailId').and.callThrough()
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

  describe('getBreweryList', function() {
    it('ensure column data gets populated', function() {
      $scope.selected.state = 'US' 
      $scope.getBreweryList()
      expect($scope.breweryDetails).toEqual(sampleGridData)
    })
  })

  describe('openDetails', function() {
    it('ensure modal opens', function() {
      var testBreweryId = 'test'
      $scope.openDetails(testBreweryId)
      expect(mockBreweryService.setCurrentBreweryDetailId).toHaveBeenCalledWith(testBreweryId)
      expect(mockBbModal.open).toHaveBeenCalledWith({controller: 'BrewModalCtrl', templateUrl: 'bbInterview/modalTitle.html'})
    })
  })
})
