angular.module('app', ['ui.router', 'ngStorage', 'ngResource', 'ngSanitize', 'app.controllers', 'app.factories', 'app.services'])
    .run([function() {
    }])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $stateProvider

    //root controller for whole app
        .state('site', {
        abstract: true,
        controller: 'ApplicationCtrl',
        templateUrl: 'templates/site.html'
    })

    //controller for just the "main.html" view
    .state('site.main', {
        url: '/main',
        controller: 'MainCtrl',
        templateUrl: 'templates/main.html'
    })

    .state('site.landing', {
        url: '/',
        controller: 'LandingCtrl',
        templateUrl: 'templates/landing.html'
    })

    .state('site.about', {
        url: '/about',
        controller: "AboutCtrl",
        templateUrl: 'templates/about.html'
    })

    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);
}])

.constant('OpenMovieDatabaseConfig', {
    /*'key': 'tpuzgqpjcjtvszmgvf9fqjfg',*/
    'base_url': 'http://www.omdbapi.com/'
})

.constant('Environment', {
    'debug': true,
    'isDevelopment': true
});
