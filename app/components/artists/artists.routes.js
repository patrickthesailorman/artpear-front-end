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
        })
        .state('artistsEdit', {
          url: '/artists/:id/edit',
          templateUrl : '/app/components/artists/artistsEdit.html',
          controller  : 'artistsEditCtrl'
        })
        .state('artistsDelete', {
          url: '/artists/:id/delete',
          templateUrl : '/app/components/artists/artistsDelete.html',
          controller  : 'artistsDeleteCtrl'
        });
    }
})();
