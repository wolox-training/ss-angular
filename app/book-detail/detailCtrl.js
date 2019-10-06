angular.
module('bookscatApp').
component('detail', {
  templateUrl: 'book-detail/detail.html', 
  controller: ['Books', '$stateParams', function DetailController(Books, $stateParams) {
    Books.query().$promise.then(book => {
      this.detail = book.find(book => book.id == $stateParams.bookId);
    });
    this.imageUrl = '../assets/default_book.svg';
  }]
})
