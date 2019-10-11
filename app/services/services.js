const moduleServices = angular.module('services', [
  'services.books',
  'services.auth'
]);

moduleServices.config(['$httpProvider', $httpProvider => {
  $httpProvider.interceptors.push('sessionInjector');
}])


