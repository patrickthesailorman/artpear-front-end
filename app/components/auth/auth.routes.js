(function(){
  angular
    .module('auth')
    .config(Routes);

    function Routes($stateProvider, $urlRouterProvider){
      $urlRouterProvider
        .otherwise('/register');
      $stateProvider
        .state('authRegister', {
          url: '/register',
          templateUrl : '/app/components/auth/authRegister.html',
        })
        .state('authLogin', {
          url: '/login',
          templateUrl : '/app/components/auth/authLogin.html',
          controller: 'authLoginCtrl'
        })
        .state('authLogout', {
          url: '/logout',
          templateUrl : '/app/components/auth/authLogout.html',
          controller: 'authLogoutCtrl'
        });
    }
})();
