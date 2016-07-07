angular.module('bbInterviewApp').factory('ConfigService', ['$http', function($http) {
  var configJsonLocation = 'dist/config/config.json'

  function getApiKey(callback) {
    return $http.get('dist/config/config.json')
                  .success(function(data) {
                    callback(data.api_key)
                  })
  }

  function getBaseApiUrl(callback) {
    return $http.get(configJsonLocation)
                  .success(function(data) {
                    callback(data.base_api_url)
                  })
  }

  function getBaseAndApi(callback) {
    return $http.get(configJsonLocation)
                  .success(function(data) {
                    callback(data.base_api_url, data.api_key)
                  })
  }

  return {
    getApiKey : getApiKey,
    getBaseApiUrl : getBaseApiUrl,
    getBaseAndApi : getBaseAndApi
  }
}])
