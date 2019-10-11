angular.
module('bookscatApp').
component('register', {
  templateUrl: 'register/register.html',
  controller: ['Auth', '$state', '$scope', function DetailController(Auth, $state) {
    this.update = (user) => {
      const body = {user: {...user, password_conformation: user.password, locale: 'en'}};
      Auth.save({}, body).$promise.then(response => {
        !!response.access_token && $state.go("loginState")
      });
    };
  }]
})
