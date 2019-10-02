angular.
  module('services.books').
  factory('Books', ['$resource',
    function($resource) {
      console.log($resource);
    }
  ]);
