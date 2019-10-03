angular.
module('bookscatApp').
component('books', {
  templateUrl: 'books-list/books.html', 
  controller: [ 'Books', '$scope', function BooksController(Books, $scope) {
    this.imageUrl = '../assets/default_book.svg';
    this.books = Books.query();
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
