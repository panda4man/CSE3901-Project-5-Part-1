angular.module('app.controllers', [])

.controller('ApplicationCtrl', function($scope, $rootScope, $timeout, AccessToken, $location) {
    $timeout(function() {
        $scope.logged = !!AccessToken.get();

        if($location.path() == '/login' && $scope.logged){
            $location.path('/main');
        }
        if($location.path() == '/main' && !$scope.logged){
            $location.path('/login');
        }
    }, 0);

    /*if ($location.path() == '/main' && !$scope.logged) {
        $location.path('/login');
    }*/

    $scope.$on('oauth:login', function(event, token) {
        console.log('Authorized third party app with token', token.access_token);
        $location.path('/main');
    });

    $scope.$on('oauth:logout', function(event) {
        console.log('The user has signed out');
        $location.path('/login');
    });

    $scope.$on('oauth:loggedOut', function(event) {
        console.log('The user is not signed in');
        $location.path('/login');
    });

    $scope.$on('oauth:denied', function(event) {
        console.log('The user did not authorize the third party app');
        $location.path('/login');
    });

    $scope.$on('oauth:expired', function(event) {
        console.log('The access token is expired. Please refresh.');
        $location.path('/login');
    });
})

.controller('MainCtrl', function($scope) {
    $scope.title = "heyy i am a title :)";
})

.controller('LogInCtrl', function($scope) {

});
