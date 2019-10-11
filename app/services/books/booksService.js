angular.
module('services.books').
factory('Books', ['$resource',
  function($resource) {
    return $resource('https://wbooks-api-stage.herokuapp.com/api/v1/books', {}, {
      query: {
        method: 'GET',
        params: {bookId: 'books'},
        isArray: true
      }
    });
  }
]);
