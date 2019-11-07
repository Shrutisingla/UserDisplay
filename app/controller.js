
;(function() {
  angular
    .module('boilerplate')
    .controller('MainController', MainController)
    .controller('UserController', UserController);

  MainController.$inject = ['LocalStorage', 'QueryService', '$http', '$scope'];
  function MainController(LocalStorage, QueryService, $http, $scope) {
    var self = this;
    this.usersList = [];
    this.getUsersList = function() {
      $http({method: 'GET', url: 'https://jsonplaceholder.typicode.com/users'}).then(function(response) {
        $scope.usersList = response.data; // response data
      });
    };
    this.getUsersList();
  }

  UserController.$inject = ['LocalStorage', 'QueryService', '$http', '$scope','$routeParams'];
  function UserController(LocalStorage, QueryService, $http, $scope, $routeParams) {
    var self = this;
    $scope.id = $routeParams.id;
    this.getUser = function() {
      $http({method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts?userId=' + $scope.id}).then(function(response) {
        $scope.currentUser = response.data; // response data
      });
    };
    this.getUser();
  }
})();
