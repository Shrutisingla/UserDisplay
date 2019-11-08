
;(function() {
  angular
    .module('boilerplate')
    .controller('MainController', MainController)
    .controller('UserController', UserController);

  MainController.$inject = ['LocalStorage', 'QueryService', '$http', '$scope', 'CONSTANTS'];
  function MainController(LocalStorage, QueryService, $http, $scope, CONSTANTS) {
    this.usersList = [];
    this.getUsersList = function() {
      $http({method: 'GET', url: CONSTANTS.API_URL + 'users'}).then(function(response) {
        $scope.usersList = response.data; // response data
      });
    };
    this.getUsersList();
  }

  UserController.$inject = ['LocalStorage', 'QueryService', '$http', '$scope','$routeParams', 'CONSTANTS'];
  function UserController(LocalStorage, QueryService, $http, $scope, $routeParams, CONSTANTS) {
    $scope.id = $routeParams.id;
    this.getUser = function() {
      $http({method: 'GET', url: CONSTANTS.API_URL + 'posts?userId=' + $scope.id}).then(function(response) {
        $scope.currentUser = response.data; // response data
      });
    };
    this.getUser();
  }
})();
