angular.
module('bookscatApp').
component('register', {
  templateUrl: 'register/register.html',
  controller: ['Auth', '$location' ,function DetailController(Auth, $location) {
    this.update = (user) => {
      const body = {user: {...user, password_conformation: user.password, locale: 'en'}};
      Auth.save({}, body).$promise.then(response => {
        !!response.access_token && $location.path("/login")
      });
    };
  }]
})
