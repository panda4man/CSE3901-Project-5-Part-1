angular.module('app', ['ui.router', 'ngStorage', 'ngResource', 'ngSanitize', 'app.controllers', 'app.factories', 'app.services'])
    .run(['$rootScope', '$state', '$stateParams', '$location', 'AuthFactory',
        function($rootScope, $state, $stateParams, $location) {}
    ])

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

    $urlRouterProvider.otherwise('/main');
}])

.constant('RottenTomatoesConfig', {
    'key': 'tpuzgqpjcjtvszmgvf9fqjfg'
});
