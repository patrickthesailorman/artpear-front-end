(function(){
  angular
    .module('seekers')
    .config(Routes);
    ////// More Routes need to be added and this should work But....
    function Routes($routeProvider){
      $routeProvider
        .when('/seekers', {
          templateUrl : 'seeker/seekerView.html',
          controller  : 'seekerCntrl',

        })
    }
})();
