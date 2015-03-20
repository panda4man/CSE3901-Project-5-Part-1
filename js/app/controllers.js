angular.module('app.controllers', [])

.controller('ApplicationCtrl', function($scope, Environment) {
    $scope.debug = Environment.debug;
})

.controller('MainCtrl', function($scope, $http, RottenTomatoesFactory, Environment, Console, $localStorage) {
    $scope.test = function() {
        RottenTomatoesFactory.boxOffice().then(function(data) {
            Console.log(data);
        }, function(data) {
            Console.log(data);
        });
    }

    $scope.movies = $localStorage.movies;
})

.controller('LandingCtrl', function ($scope){

})

.controller('AboutCtrl', function ($scope){

});
