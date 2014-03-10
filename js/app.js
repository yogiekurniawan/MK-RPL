angular.module('rpl', [
		'ngRoute', 			/* modul route dari angular-route.min.js */
		'firebase'
		//'rpl.filters',		/* modul dari filters.js */
		//'rpl.services',		/* modul dari services.js */
		//'rpl.directives',	/* modul dari directives.js */
		//'rpl.controllers' 	/* modul dari controller.js */
	])

	
	.value('fbURL', 'https://uas-rpl-demo.firebaseio.com/')

	.factory('Items', function($firebase, fbURL){
		return $firebase(new Firebase(fbURL));
	})

	.config( [
	    '$compileProvider',
	    function( $compileProvider )
	    {   
	        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
	        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
	        // http://stackoverflow.com/questions/15606751/angular-changes-urls-to-unsafe-in-extension-page
	    }
	])

	.config (function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/home.html', 
				controller: 'rplHomeCtrl'
			})
			.when('/add', {
				templateUrl: 'partials/add-edit-delete.html', 
				controller: 'rplAddCtrl'
			})
			.when('/edit', {
				templateUrl: 'partials/add-edit-delete.html', 
				controller: 'rplEditCtrl'
			})
			.when('/edit/:itemId', {
				templateUrl: 'partials/add-edit-delete.html', 
				controller: 'rplEditCtrl'
			})
			.otherwise ({
				redirectTo: '/'
			});
	})

	.controller('rplHomeCtrl', function($scope, Items){ /* S:controller home.html */
		$scope.items = Items;
	}) /* E:controller home.html */

	/* S:controller add-edit-delete.html fungsi button submit dan cancel*/
	.controller('rplAddCtrl', function($scope, $location, $timeout, Items){ 
		$scope.save = function(){
			Items.$add($scope.item, function(){
				$timeout(function() { $location.path('/'); });
			});
		};
	})
	/* E:controller add-edit-delete.html fungsi button submit dan cancel*/

	/* S:controller add-edit-delete.html fungsi button save, delete, dan cancel */
	.controller('rplEditCtrl', function($scope, $location, $routeParams, $firebase, fbURL){ 
		var itemUrl = fbURL + $routeParams.itemId;
		$scope.item = $firebase(new Firebase(itemUrl));

		$scope.save = function(){
			$scope.item.$save();
			$location.path('/');
		};

		$scope.destroy = function(){
			$scope.item.$remove();
			$location.path('/');
		};
	}); 
	/* E:controller add-edit-delete.html fungsi button save, delete, dan cancel */