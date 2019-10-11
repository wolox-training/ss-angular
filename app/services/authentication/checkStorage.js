angular.
module('services.auth').
factory('sessionInjector', ['$rootScope', ($rootScope) => {
  const token = localStorage.getItem('token');
  const sesionInjector = {
    request: (config) => {
      if(token) {
        config.headers['Authorization'] = token;
      }
      return config;
    },
    check: !!token
  }
  return sesionInjector;
}]);
