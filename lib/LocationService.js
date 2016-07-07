angular.module('bbInterviewApp').factory('LocationService', ['$http', 'ConfigService', function($http, configService) {
  var locationsEndpoint = '/locations'

  function getBreweriesByState(state, callback) {
    configService.getBaseAndApi(function(baseApiUrl, apiKey) {
      return $http.get(baseApiUrl + locationsEndpoint + '?key=' + apiKey + '&region=' + state)
                    .success(function(data) {
                      callback(data)
                    })
    })
  }

  return {
    getBreweriesByState : getBreweriesByState
  }
}])
