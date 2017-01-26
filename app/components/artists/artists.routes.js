(function(){
  angular
    .module('artists')
    .config(Routes);
    ////// More Routes need to be added and this should work But....!
    function Routes($stateProvider){
      $stateProvider
        .state('artistsIndex', {
          url: '/artists',
          templateUrl : '/app/components/artists/artistsIndex.html',
          controller  : 'artistsIndexCtrl'
        })
        .state('artistsRegister', {
          url: '/artists/register',
          templateUrl : '/app/components/artists/artistsRegister.html',
          controller  : 'artistsRegisterCtrl'
        })
        .state('artistsShow', {
          url: '/artists/:id',
          templateUrl : '/app/components/artists/artistsShow.html',
          controller  : 'artistsShowCtrl'
        });
    }
})();
