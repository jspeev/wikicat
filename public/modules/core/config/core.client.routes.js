'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('wikicat', {
			url: '/home',
			templateUrl: 'modules/wikicatmod/views/wikicatmain.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/wikicatmod/views/wikicatmain.client.view.html'
		});
	}
]);