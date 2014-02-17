'use strict';

angular.module('rpl.filters', []).
	filter('interpolate', ['version', function (version) {
		return function(text){
			return String(text).replace(/\%VERSION\%/mg, version);
		}
	}]);