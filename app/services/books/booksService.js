angular.
module('services.books').
factory('Books', ['$resource',
  function($resource) {
    return $resource('books/:bookId.json', {}, {
      query: {
        method: 'GET',
        params: {bookId: 'books'},
        isArray: true
      }
    });
  }
]);
