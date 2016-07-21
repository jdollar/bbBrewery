angular.module('bbInterviewApp').factory('LocationService', ['$http', 'ConfigService', function($http, configService) {
  var locationsEndpoint = '/locations'

  function getBreweriesByState(state, callback) {
    configService.getBaseProxy(function(baseProxyUrl) {
      return $http.get(baseProxyUrl + locationsEndpoint + '?region=' + state).success(function(data) { callback(data) })
    })
  }

  return {
    getBreweriesByState : getBreweriesByState
  }
}])
