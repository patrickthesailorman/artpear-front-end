(function(){
  angular
    .module('artists')
    .config(Routes);

    function Routes($routeProvider){
      $routeProvider
        .when('/artists', {
          templateUrl : 'artists/artistView.html',
          controller  : 'artistCntrl',

        })
    }
})();
