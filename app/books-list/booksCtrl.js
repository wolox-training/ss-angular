angular.
module('bookscatApp').
component('books', {
  templateUrl: 'books-list/books.html', 
  controller: [ '$http', '$scope', function BooksController($http, $scope) {
    const self = this;
    this.imageUrl = '../assets/default_book.svg';

    $http.get('books/books.json').then(function(response) {
      self.books = response.data;
    });

    this.params = [
      {value: 'title', key: 'Nombre'},
      {value: 'author', key: 'Autor'}
    ];

    this.getFilter = () => {
      let filter = {};
      if ($scope.filter && $scope.filter.value) filter[$scope.filter.value] = $scope.query;
      return filter;
    };
  }]
})
