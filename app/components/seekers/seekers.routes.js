(function(){
  angular
    .module('seekers')
    .config(Routes);
    ////// More Routes need to be added and this should work But....!
    function Routes($stateProvider){
      $stateProvider
        .state('seekersIndex', {
          url: '/seekers',
          templateUrl : '/app/components/seekers/seekersIndex.html',
          controller  : 'seekersIndexCtrl'
        })
        .state('seekersRegister', {
          url: '/seekers/register',
          templateUrl : '/app/components/seekers/seekersRegister.html',
          controller  : 'seekersRegisterCtrl'
        })
        .state('seekersShow', {
          url: '/seekers/:id',
          templateUrl : '/app/components/seekers/seekersShow.html',
          controller  : 'seekersShowCtrl'
        })
        .state('seekersEdit', {
          url: '/seekers/:id/edit',
          templateUrl : '/app/components/seekers/seekersEdit.html',
          controller  : 'seekersEditCtrl'
        })
        .state('seekersDelete', {
          url: '/seekers/:id/delete',
          templateUrl : '/app/components/seekers/seekersDelete.html',
          controller  : 'seekersDeleteCtrl'
        });
    }
})();
