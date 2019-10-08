var bookscatApp = angular.module('bookscatApp', [
  'ui.router',
  'services'
]);

bookscatApp.config($stateProvider => {
  $stateProvider
  .state('registerState',{
    url: '/sign-up',
    component: 'register'
  })
  .state('loginState',{
    url: '/login',
    component: 'login'
  })
  .state('booksState',{
    url: '/',
    component: 'books'
  })
  .state('detailState',{
    url: '/books/{bookId}',
    component: 'detail'
  });
});
