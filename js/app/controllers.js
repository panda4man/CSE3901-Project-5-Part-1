angular.module('app.controllers', [])

.controller('ApplicationCtrl', function($scope, Environment, $http, OpenMovieDatabaseFactory, Console) {
    $scope.debug = Environment.debug;
})

.controller('MainCtrl', function($scope, OpenMovieDatabaseFactory, Environment, Console, CleanFormService, YouTubeFactory) {
    $scope.data = {
        submitted: false,
        success: false
    }

    $scope.form = {
        title: '',
        year: '',
    }

    $scope.processForm = function() {
        $scope.data.submitted = true;
        $scope.data.success = false;
        OpenMovieDatabaseFactory.search({
            title: $scope.form.title,
            year: $scope.form.year
        }).then(function(data) {
            $scope.data.success = true;
            $scope.movie = data;
            CleanFormService.clean($scope.form);
            Console.log(data);
            YouTubeFactory.search($scope.movie.Title);
           
        }, function(data) {
            $scope.data.submitted = false;
            $scope.data.success = true;
            Console.log(data);
        });
    }
})

.controller('LandingCtrl', function($scope) {

})

.controller('AboutCtrl', function($scope) {

});
