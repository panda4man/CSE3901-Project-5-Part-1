angular.module('app', ['gapi', 'ui.router', 'oauth', 'ngStorage', 'ngResource', 'ngSanitize', 'app.controllers', 'app.factories', 'app.services'])
    .run(['$rootScope', '$state', '$stateParams', '$location', 'AuthFactory',
        function($rootScope, $state, $stateParams, $location) {}
    ])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
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
    });
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/login');
    //$locationProvider.html5Mode(true).hashPrefix('!');
}])

.value('GoogleApp', {
    apiKey: 'AIzaSyD4GrnKhrBr8U6PnCH7tkyAGHTB-jU7MrI',
    clientId: '949245447375-hlrr31k5i14qfdlbug71dtqitd537f2p.apps.googleusercontent.com',
    scopes: [
      'https://www.googleapis.com/auth/calendar'
    ]
  });
