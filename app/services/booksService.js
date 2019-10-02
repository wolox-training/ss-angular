angular.
module('bookscatApp').
factory('serviceId', ['depService', function(depService) {
  console.log(depService);
}])
