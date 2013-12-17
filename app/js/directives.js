'use strict';

/* Directives */


var boobTubeDrctvs = angular.module('boobTubeDrctvs', []);

boobTubeDrctvs.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
