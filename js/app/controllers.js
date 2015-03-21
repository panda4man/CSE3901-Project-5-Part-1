angular.module('app.controllers', [])

.controller('ApplicationCtrl', function($scope, Environment, $http) {
    $scope.debug = Environment.debug;
})

.controller('MainCtrl', function($scope, $http, OpenMovieDatabaseFactory, Environment, Console) {
    $scope.movies = $localStorage.movies;
})

.controller('LandingCtrl', function ($scope){

})

.controller('AboutCtrl', function ($scope){

});
