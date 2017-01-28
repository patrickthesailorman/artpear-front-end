(function() {
    'use strict';

    angular
        .module('opportunities')
        .controller('opportunitiesIndexCtrl', opportunitiesIndexCtrl)
        .controller('opportunitiesShowCtrl', opportunitiesShowCtrl)
        .controller('opportunitiesCreateCtrl', opportunitiesCreateCtrl)
        .controller('opportunitiesEditCtrl', opportunitiesEditCtrl)
        .controller('opportunitiesDeleteCtrl', opportunitiesDeleteCtrl);

        function opportunitiesIndexCtrl($scope, OpportunitiesFactory){
          $scope.opportunities = OpportunitiesFactory.query();
        }

        function opportunitiesShowCtrl($scope, $stateParams, OpportunitiesFactory){
          $scope.opportunity = OpportunitiesFactory.get({id: $stateParams.id});
        }

        function opportunitiesCreateCtrl($scope, $state, $stateParams, OpportunitiesFactory){
          $scope.opportunity = new OpportunitiesFactory();
          $scope.createOpportunity = function() {
            $scope.opportunity.$save(function() {
              $state.go('opportunitiesShow', {id: $scope.opportunity._id});
            });
          };
        }

        function opportunitiesEditCtrl($scope, $state, $stateParams, OpportunitiesFactory){
          $scope.updateOpportunity = function() {
            $scope.opportunity.$update(function() {
              $state.go('opportunitiesShow', {id: $scope.opportunity._id});
            });
          };

          $scope.loadOpportunity = function() {
            $scope.opportunity = OpportunitiesFactory.get({id: $stateParams.id});
          };

          $scope.loadOpportunity();
        }

        function opportunitiesDeleteCtrl($scope, $state, $stateParams, OpportunitiesFactory){
          $scope.deleteOpportunity = function() {
            $scope.opportunity.$delete(function() {
              $state.go('opportunitiesIndex');
            });
          };

          $scope.loadOpportunity = function() {
            $scope.opportunity = OpportunitiesFactory.get({id: $stateParams.id});
          };

          $scope.loadOpportunity();
        }
})();
