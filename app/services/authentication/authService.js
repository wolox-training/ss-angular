angular.
module('services.auth').
factory('Auth', ['$resource',
  function($resource) {
    return $resource('https://wbooks-api-stage.herokuapp.com/api/v1/users/:sessions');
  }
]);
