angular.
module('bookscatApp').
component('login', {
  templateUrl: 'login/login.html',
  controller: ['Auth', '$location', function DetailController(Auth, $location) {
    this.update = user => {
      const body = {session: {...user}};
      Auth.save({sessions: 'sessions'}, body).$promise.then(response => {
        if(response.access_token) {
          localStorage.setItem('token', response.access_token);
          $location.path("/")
        }
      });
    };
  }]
})
