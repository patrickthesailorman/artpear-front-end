(function(){
  angular
    .module('artPearApp')
    .config(Routes);

    function Routes($stateProvider, $urlRouterProvider){
      $urlRouterProvider
        .otherwise('/register');
      $stateProvider
        .state('appRegister', {
          url: '/register',
          templateUrl : '/app/components/app/appRegister.html',
        });
    }
})();
