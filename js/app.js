'use strict';

angular.module('rpl', [
		'ngRoute', 			/* modul route dari angular-route.min.js */
		'rpl.filters',		/* modul dari filters.js */
		'rpl.services',		/* modul dari services.js */
		'rpl.directives',	/* modul dari directives.js */
		'rpl.controllers' 	/* modul dari controller.js */
	]).

config (['$routeProvider' ,function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'rplHomeCtrl'});
	$routeProvider.when('/add', {templateUrl: 'partials/add-edit-delete.html', controller: 'rplAddCtrl'});
	$routeProvider.when('/edit/:projectId', {templateUrl: 'partials/add-edit-delete.html', controller: 'rplEditCtrl'});
	$routeProvider.otherwise ({redirectTo: '/'});
}]);