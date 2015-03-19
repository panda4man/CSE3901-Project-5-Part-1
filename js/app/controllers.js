angular.module('app.controllers', [])

.controller('ApplicationCtrl', function($scope, $rootScope, $timeout, $location) {
    
})

.controller('MainCtrl', function($scope, $http, RottenTomatoesFactory) {
    $scope.title = "heyy i am a title :)";

    $scope.test = function () {
        RottenTomatoesFactory.upcomingMovies().then(function(data){
            console.log(data);
        }, function (data){
            console.log(data);
        });
    }
});
