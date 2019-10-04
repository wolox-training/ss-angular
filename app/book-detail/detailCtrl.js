angular.
module('bookscatApp').
component('detail', {
  templateUrl: 'book-detail/detail.html', 
  controller: ['Books', '$stateParams', function DetailController(Books, $stateParams) {
    this.imageUrl = '../assets/default_book.svg';
    console.log(Books.query());
  }]
})
