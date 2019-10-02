var bookscatApp = angular.module('bookscatApp', ['ui.router']);

bookscatApp.config($stateProvider => {
  $stateProvider
  .state('registerState',{
    url: '/sign-up',
    component: 'register'
  });

  $stateProvider
  .state('booksState',{
    url: '/',
    component: 'books'
  });

  $stateProvider
  .state('detailState',{
    url: '/books/{bookId}',
    component: 'detail'
  });
});
