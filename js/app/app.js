angular.module('app', ['ui.router', 'ngStorage', 'ngResource', 'ngSanitize', 'app.controllers', 'app.factories', 'app.services'])
    .run(['RottenTomatoesFactory', 'Console', 'MovieStorageFactory', 'DvdStorageFactory', function(RottenTomatoesFactory, Console, MSF, DSF) {
        //see if we need to update local movie data
        if (MSF.needToWriteStorage()) {
            RottenTomatoesFactory.boxOffice().then(function(data) {
                MSF.writeBoxOffice(data);
                Console.log('Got the box office data');
            }, function(data) {
                Console.log(data);
            });
            RottenTomatoesFactory.inTheaters().then(function(data) {
                MSF.writeInTheaters(data);
                Console.log('Got the in theater data');
            }, function(data) {
                Console.log(data);
            });
            RottenTomatoesFactory.openingMovies().then(function(data) {
                MSF.writeOpeningMovies(data);
                Console.log('Got the opening movies data');
            }, function(data) {
                Console.log(data);
            });
            RottenTomatoesFactory.upcomingMovies().then(function(data) {
                MSF.writeUpcomingMovies(data);
                Console.log('Got the upcoming movies data');
            }, function(data) {
                Console.log(data);
            });
        } else {
            Console.log("Do not need to update movies.");
        }
        //see if we need to update local dvd data
        if(DSF.needToWriteStorage()){
            RottenTomatoesFactory.currentRelease().then(function(data) {
                DSF.writeCurrentRelease(data);
                Console.log('Got the current release dvd data.');
            }, function(data) {
                Console.log(data);
            });
            RottenTomatoesFactory.newRelease().then(function(data) {
                DSF.writeNewRelease(data);
                Console.log('Got the new release dvd data.');
            }, function(data) {
                Console.log(data);
            });
            RottenTomatoesFactory.upcomingRelease().then(function(data) {
                DSF.writeUpcomingRelease(data);
                Console.log('Got the upcoming release dvd data.');
            }, function(data) {
                Console.log(data);
            });
        } else {
            Console.log('Do not need to update dvds.');
        }
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
    $locationProvider.html5Mode(true);
}])

.constant('RottenTomatoesConfig', {
    'key': 'tpuzgqpjcjtvszmgvf9fqjfg',
    'base_url': 'http://api.rottentomatoes.com/api/public/v1.0'
})

.constant('Environment', {
    'debug': true,
    'isDevelopment': true
});
