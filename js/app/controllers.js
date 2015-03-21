angular.module('app.controllers', [])

.controller('ApplicationCtrl', function($scope, Environment, $http, OpenMovieDatabaseFactory, Console) {
    $scope.debug = Environment.debug;
})

.controller('MainCtrl', function($scope, OpenMovieDatabaseFactory, Environment, Console, CleanFormService) {
    $scope.data = {
        submitted: false,
        success: false
    }

    $scope.form = {
        title:'',
        actor:'',
        genre:'',
        year:'',
        minCriticRating: 20,
        minUserRating: 20,
        maxRunTime: 120,
        releasedOnDvd: true,
        releasedInTheater: true
    }
    
    $scope.processForm = function () {
        $scope.data.submitted = true;
        OpenMovieDatabaseFactory.search({title: $scope.form.title, year:$scope.form.year}).then(function (data) {
            $scope.data.submitted = false;
            $scope.data.success = true;
            $scope.movie = data;
            CleanFormService.clean($scope.form);
            Console.log(data);
        }, function (data) {
            $scope.data.submitted = false;
            $scope.data.success = true;
            Console.log(data);
        });
    }  
})

.controller('LandingCtrl', function ($scope){

})

.controller('AboutCtrl', function ($scope){

});
