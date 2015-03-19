angular.module('app.services', [])

/**
*	This is a custom http service to fill the needs of the two apis
*	used in this project. If we were using more RESTful API's
* 	we would have gone with angular's $resource instead.
*/
.service('HttpService', ['$http', '$q', function($http, $q) {
    return {
        get: function(url) {
            var deferred = $q.defer();
            $http.get(url).success(function(data, status, headers, config) {
                deferred.resolve(data);
            }).error(function(data, status, headers, config) {
                var object = {
                    data: data,
                    status: status,
                    config: config
                }
                deferred.reject(object);
            });
            return deferred.promise;
        }
    }
}]);
