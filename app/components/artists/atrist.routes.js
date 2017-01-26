(function(){
  angular
    .module('artists')
    .config(Routes);
    ////// More Routes need to be added and this should work But....!
    function Routes($routeProvider){
      $routeProvider
        .when('/artists', {
          templateUrl : 'artists/artistView.html',
          controller  : 'artistCntrl',

        })
    }
})();
