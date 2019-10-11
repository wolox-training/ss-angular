angular.
module('bookscatApp').
component('books', {
  bindings: { books: '<' },
  templateUrl: 'books-list/books.html', 
  controller: ['$scope', '$transitions', function BooksController($scope) {
    this.imageUrl = '../assets/default_book.svg';
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
