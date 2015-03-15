angular.module('app', ['ui.router', 'ngSanitize', 'app.controllers', 'app.factories', 'app.services'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('main', {
		url: '/',
		controller: 'MainCtrl',
		templateUrl: 'templates/main.html'
	});

	$urlRouterProvider.otherwise('/');
}])
