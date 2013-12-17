'use strict';

/* Filters */

var boobTubeFltrs = angular.module('boobTubeFltrs', []);

boobTubeFltrs.filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
