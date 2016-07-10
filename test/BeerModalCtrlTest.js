describe('BeerModalCtrl', function() {
  var $scope, mockBreweryService

  var sampleData = {data: [{labels: {icon: 'testIcon'}, name: 'testName', glass: {name: 'testGlassName'}}]}

  beforeEach(module('bbInterviewApp'))

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new()

    mockBreweryService = {
      getBreweryBeers: function(callback) {
        callback(sampleData)
      }
    }

    spyOn(mockBreweryService, 'getBreweryBeers').and.callThrough()
    $controller('BeerModalCtrl', {$scope: $scope, BreweryService: mockBreweryService})
  }))

  it('should create Beers tile header', function() {
    expect($scope.tileHeader).toBe('Beers')
  })

  it('should call getBreweryBeers', function() {
    expect(mockBreweryService.getBreweryBeers).toHaveBeenCalled()
  })

  it('scope.grid should be defined', function() {
    expect($scope.grid).toBeDefined()
  })

  it('should populate grid with column data', function() {
    expect($scope.grid.beerGrid).toBeDefined()
    expect($scope.grid.beerGrid).toEqual({
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
          name: 'name',
        },
        {
          caption: 'Glass',
          jsonmap: 'glass.name',
          id: 3,
          name: 'glass',
        }
      ],
      data: sampleData.data,
      sortOptions: {},
      selectedColumnIds: [1, 2, 3]
    })
  })
})
