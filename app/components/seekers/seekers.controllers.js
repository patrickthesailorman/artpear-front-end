(function() {
    'use strict';

    angular
        .module('seekers')
        .controller('seekersIndexCtrl', seekersIndexCtrl)
        .controller('seekersShowCtrl', seekersShowCtrl)
        .controller('seekersRegisterCtrl', seekersRegisterCtrl)
        .controller('seekersEditCtrl', seekersEditCtrl)
        .controller('seekersDeleteCtrl', seekersDeleteCtrl);

        function seekersIndexCtrl($scope, SeekersFactory){
          $scope.seekers = SeekersFactory.query();
        }

        function seekersShowCtrl($scope, $stateParams, SeekersFactory){
          $scope.seeker = SeekersFactory.get({id: $stateParams.id});
        }

        function seekersRegisterCtrl($scope, $state, $stateParams, SeekersFactory){
          $scope.seeker = new SeekersFactory();
          $scope.registerSeeker = function() {
            $scope.seeker.$save(function() {
              $state.go('seekersShow', {id: $scope.seeker._id});
            });
          };
        }

        function seekersEditCtrl($scope, $state, $stateParams, SeekersFactory){
          $scope.updateSeeker = function() {
            $scope.seeker.$update(function() {
              $state.go('seekersShow', {id: $scope.seeker._id});
            });
          };

          $scope.loadSeeker = function() {
            $scope.seeker = SeekersFactory.get({id: $stateParams.id});
          };

          $scope.loadSeeker();
        }

        function seekersDeleteCtrl($scope, $state, $stateParams, SeekersFactory){
          $scope.deleteSeeker = function() {
            $scope.seeker.$delete(function() {
              $state.go('seekersIndex');
            });
          };

          $scope.loadSeeker = function() {
            $scope.seeker = SeekersFactory.get({id: $stateParams.id});
          };

          $scope.loadSeeker();
        }
})();
