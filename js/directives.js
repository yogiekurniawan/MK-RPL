'use strict';

angular.module('rpl.directives', []).
	directive('appVersion', ['version', function (version) {
		return function(scope, elm, attrs){
			elm.text(version);
		};
	}]);