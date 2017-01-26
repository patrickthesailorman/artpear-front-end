(function() {
    'use strict';

    angular
        .module('responses')
        .controller('responsesIndexCtrl', responsesIndexCtrl)
        .controller('responsesShowCtrl', responsesShowCtrl)
        .controller('responsesCreateCtrl', responsesCreateCtrl)
        .controller('responsesEditCtrl', responsesEditCtrl)
        .controller('responsesDeleteCtrl', responsesDeleteCtrl);

        function responsesIndexCtrl($scope, ResponsesFactory){
          $scope.responses = ResponsesFactory.query();
        }

        function responsesShowCtrl($scope, $stateParams, ResponsesFactory){
          $scope.response = ResponsesFactory.get({id: $stateParams.id});
        }

        function responsesCreateCtrl($scope, $state, $stateParams, ResponsesFactory){
          $scope.response = new ResponsesFactory();
          $scope.createResponse = function() {
            $scope.response.$save(function() {
              $state.go('responsesShow', {id: $scope.response._id});
            });
          };
        }

        function responsesEditCtrl($scope, $state, $stateParams, ResponsesFactory){
          $scope.updateResponse = function() {
            $scope.response.$update(function() {
              $state.go('responsesShow', {id: $scope.response._id});
            });
          };

          $scope.loadResponse = function() {
            $scope.response = ResponsesFactory.get({id: $stateParams.id});
          };

          $scope.loadResponse();
        }

        function responsesDeleteCtrl($scope, $state, $stateParams, ResponsesFactory){
          $scope.deleteResponse = function() {
            $scope.response.$delete(function() {
              $state.go('responsesIndex');
            });
          };

          $scope.loadResponse = function() {
            $scope.response = ResponsesFactory.get({id: $stateParams.id});
          };

          $scope.loadResponse();
        }
})();
