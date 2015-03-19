angular.module('app.controllers', [])

.controller('ApplicationCtrl', function($scope, $rootScope, $timeout, $location) {
    
})

.controller('MainCtrl', function($scope, $http, RottenTomatoesConfig) {
    $scope.title = "heyy i am a title :)";

    $scope.test = function () {
        $http.get('http://api.rottentomatoes.com/api/public/v1.0.json?apikey=' + RottenTomatoesConfig.key).success(function (data, status, headers, config) {
            console.log(data);
        }).
        error(function (data, status, headers, config) {
            console.log(data);
            console.log(status);
        });
    }
});
