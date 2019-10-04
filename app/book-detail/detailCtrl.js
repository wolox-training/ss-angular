angular.
module('bookscatApp').
component('detail', {
  templateUrl: 'book-detail/detail.html', 
  controller: function DetailController($http, $stateParams) {
    this.imageUrl = '../assets/default_book.svg';
    $http.get('books/books.json').then(response => {
      const books = response.data;
      this.detail = books.find(book => book.id == $stateParams.bookId)
    });
  }
})
