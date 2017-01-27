(function(){
  angular
    .module('opportunities')
    .config(Routes);
    ////// More Routes need to be added and this should work But....!
    function Routes($stateProvider){
      $stateProvider
        .state('opportunitiesIndex', {
          url: '/opportunities',
          templateUrl : '/app/components/opportunities/opportunitiesIndex.html',
          controller  : 'opportunitiesIndexCtrl'
        })
        .state('opportunitiesCreate', {
          url: '/opportunities/create',
          templateUrl : 'app/components/opportunities/opportunitiesCreate.html',
          controller  : 'opportunitiesCreateCtrl'
        })
        .state('opportunitiesShow', {
          url: '/opportunities/:id',
          templateUrl : '/app/components/opportunities/opportunitiesShow.html',
          controller  : 'opportunitiesShowCtrl'
        })
        .state('opportunitiesEdit', {
          url: '/opportunities/:id/edit',
          templateUrl : '/app/components/opportunities/opportunitiesEdit.html',
          controller  : 'opportuniesEditCtrl'
        })
        .state('opportunitiesDelete', {
          url: '/opportunities/:id/delete',
          templateUrl : '/app/components/opportunities/opportunitiesDelete.html',
          controller  : 'opportunitiesDeleteCtrl'
        });
    }
})();
