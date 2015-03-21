angular.module('app.controllers', [])

.controller('ApplicationCtrl', function($scope, Environment, $http) {
    $scope.debug = Environment.debug;
    $http.get('http://www.omdbapi.com/?t=frozen&y=&plot=full&r=json&tomatoes=true').success(function (data){
        console.log(data);
    }).error(function (data){
        console.log(data);
    });
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
