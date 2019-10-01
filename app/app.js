var bookscatApp = angular.module('bookscatApp', ['ui.router']);

bookscatApp.config(function($stateProvider) {
  var booksState = {
    name: 'books',
    url: '/',
    component: 'books'
  }

  var detailState = {
    name: 'detail',
    url: '/books/{bookId}',
    component: 'detail'
  }

  $stateProvider.state(booksState);
  $stateProvider.state(detailState);
});
