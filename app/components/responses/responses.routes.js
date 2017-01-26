(function(){
  angular
    .module('responses')
    .config(Routes);
    ////// More Routes need to be added and this should work But....!
    function Routes($stateProvider){
      $stateProvider
        .state('responsesIndex', {
          url: '/responses',
          templateUrl : '/app/components/responses/responsesIndex.html',
          controller  : 'responsesIndexCtrl'
        })
        .state('responsesCreate', {
          url: '/responses/create',
          templateUrl : '/app/components/responses/responsesCreate.html',
          controller  : 'responsesCreateCtrl'
        })
        .state('responsesShow', {
          url: '/responses/:id',
          templateUrl : '/app/components/responses/responsesShow.html',
          controller  : 'responsesShowCtrl'
        })
        .state('responsesEdit', {
          url: '/responses/:id/edit',
          templateUrl : '/app/components/responses/responsesEdit.html',
          controller  : 'responsesEditCtrl'
        })
        .state('responsesDelete', {
          url: '/responses/:id/delete',
          templateUrl : '/app/components/responses/responsesDelete.html',
          controller  : 'responsesDeleteCtrl'
        });
    }
})();
