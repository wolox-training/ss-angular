angular.
module('bookscatApp').
component('register', {
  templateUrl: 'register/register.html',
  controller: ['$scope',function DetailController($scope) {
    this.update = (user) => {
      console.log(user,'estoy haciendo click');
    };
  }]
})
