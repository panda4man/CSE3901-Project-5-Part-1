angular.module('app', ['ui.router', 'oauth', 'ngStorage', 'ngResource', 'ngSanitize', 'app.controllers', 'app.factories', 'app.services'])
    .run(['$rootScope', '$state', '$stateParams', '$location', 'AuthFactory',
        function($rootScope, $state, $stateParams, $location) {
        }
    ])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider

    .state('site', {
        abstract: true,
        controller: 'ApplicationCtrl',
        templateUrl: 'templates/site.html'
    })

    .state('site.main', {
        url: '/main',
        controller: 'MainCtrl',
        templateUrl: 'templates/main.html'
    })

    .state('site.logging', {
        url: '/access_token=:accessToken',
        template: "woahhhh here?",
        controller: function($location, AccessToken) {
            var hash = $location.path().substr(1);
            AccessToken.setTokenFromString(hash);
        }
    })

    .state('site.login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LogInCtrl'
    })

    $urlRouterProvider.otherwise('/login');
    //$locationProvider.html5Mode(true).hashPrefix('!');
}]);
