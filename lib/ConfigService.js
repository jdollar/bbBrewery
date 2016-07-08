angular.module('bbInterviewApp').factory('ConfigService', ['$http', function($http) {
  var configJsonLocation = 'dist/config/config.json'

  function getBaseProxy(callback) {
    return $http.get(configJsonLocation)
                  .success(function(data) {
                    callback(data.base_proxy_url)
                  })
  }

  return {
    getBaseProxy : getBaseProxy
  }
}])
