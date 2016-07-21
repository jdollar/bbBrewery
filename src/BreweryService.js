angular.module('bbInterviewApp').factory('BreweryService', ['$http', 'ConfigService', function($http, configService) {
  var breweryData = {}

  var breweryEndpoint = '/brewery'
  var beersEndpointOption = '/beers'
  var locationsEndpointOption = '/locations'

  function getBreweryDetails(callback) {
    configService.getBaseProxy(function(baseProxyUrl) {
      return $http.get(baseProxyUrl + breweryEndpoint + '/' + breweryData.currentBreweryDetailId).success(function(data) { callback(data) })
    })
  }

  function getBreweryLocation(callback) {
    configService.getBaseProxy(function(baseProxyUrl) {
      return $http.get(baseProxyUrl + breweryEndpoint + '/' + breweryData.currentBreweryDetailId + locationsEndpointOption).success(function(data) { 
        var primaryLocationDataObject = {}

        for (var i = 0; i < data.data.length; i++) {
          var isPrimary = data.data[i].isPrimary
          if (isPrimary === 'Y') {
            primaryLocationDataObject = {"data": data.data[i]}
            callback(primaryLocationDataObject)
          }
        }

        callback(primaryLocationDataObject)
      })
    })
  }

  function getBreweryBeers(callback) {
    configService.getBaseProxy(function(baseProxyUrl) {
      return $http.get(baseProxyUrl + breweryEndpoint + '/' + breweryData.currentBreweryDetailId + beersEndpointOption).success(function(data) { callback(data) })
    })
  }

  var getCurrentBreweryDetailId = function() {
    return breweryData.currentBreweryDetailId
  }

  var setCurrentBreweryDetailId = function(breweryId) {
    breweryData.currentBreweryDetailId = breweryId
  }

  return {
    getBreweryDetails : getBreweryDetails,
    getBreweryLocation : getBreweryLocation,
    getBreweryBeers : getBreweryBeers,
    getCurrentBreweryDetailId : getCurrentBreweryDetailId,
    setCurrentBreweryDetailId : setCurrentBreweryDetailId
  }
}])
