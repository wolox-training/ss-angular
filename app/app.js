var bookscatApp = angular.module('bookscatApp', [
  'ui.router',
  'services'
]);

bookscatApp.config(($stateProvider) => {
  $stateProvider
  .state('registerState',{
    url: '/sign-up',
    component: 'register',
    data: { private: false }
  })
  .state('loginState',{
    url: '/login',
    component: 'login',
    data: { private: false }
  })
  .state('booksState',{
    url: '/',
    component: 'books',
    data: { private: true },
    resolve: {
      books: (Books) => Books.query()
    },
  })
  .state('detailState',{
    url: '/books/{bookId}',
    component: 'detail',
    data: { private: true },
    resolve: {
      detail: (Books, $transition$) => {
        return Books.query().$promise.then(book => (
          book.find(book => book.id == $transition$.params().bookId)
        ));
      }
    }
  });
}).run(['$transitions', 'sessionInjector', ($transitions, CheckAuth) => {
  $transitions.onStart({
    to: true
  }, (trans) => {
    const { private } = trans.to().data;
    if(CheckAuth.check && !private) {
      return trans.router.stateService.target('booksState');
    };
    if(!CheckAuth.check && private) {
      return trans.router.stateService.target('loginState');
    };
    return true;
  });
}]);
