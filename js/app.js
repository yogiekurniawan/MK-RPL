angular.module('rpl', [
		'ngRoute', 			/* modul route dari angular-route.min.js */
		'rpl.controller' 	/* modul dari controller.js */
	]).

config (['$routeProvider' ,function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'rplHomeCtrl'});
	$routeProvider.when('/add', {templateUrl: 'partials/add-edit-delete.html', controller: 'rplAddCtrl'});
	$routeProvider.when('/edit/:projectId', {templateUrl: 'partials/add-edit-delete.html', controller: 'rplEditCtrl'});
	$routeProvider.otherwise ({redirecTo: '/'});
}]);