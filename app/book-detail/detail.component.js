angular.
module('bookscatApp').
component('detail', {
  templateUrl: 'book-detail/detail.template.html', 
  controller: function DetailController($http, $stateParams) {
    const self = this;
    this.imageUrl = '../assets/default_book.svg';
    $http.get('books/books.json').then(function(response) {
      const books = response.data;
      self.detail = books.find(book => book.id == $stateParams.bookId)
    });
  }
})
