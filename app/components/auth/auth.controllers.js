(function() {
    'use strict';

    angular
      .module('auth')
      .controller('authLoginCtrl', authLoginCtrl)
      .controller('authLogoutCtrl', authLogoutCtrl);

      authLoginCtrl.$inject = ['$scope', '$http', 'API_URL', '$cookies'];

      function authLoginCtrl($scope, $http, API_URL, $cookies) {
        $scope.login = function() {
          $http.post(`${API_URL}auth/login`, {
              email: $scope.email,
              password: $scope.password
            })
            .then(function(response) {
              $cookies.putObject('user', response.data);
            }, function(response) {
              console.error(response);
            });
        }
      }

      function authLogoutCtrl($scope, $http, API_URL, $cookies) {
        $scope.logout = function() {
          $http.post(`${API_URL}auth/logout`)
            .then(function(response) {
              $cookies.remove('user');
            }, function(response) {
              console.error(response);
            });
        }
      }
})();
