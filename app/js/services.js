'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var boobTubeSrvcs = angular.module('boobTubeSrvcs', []).
  value('version', '0.1');
