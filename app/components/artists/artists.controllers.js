(function() {
    'use strict';

    angular
        .module('artists')
        .controller('artistsIndexCtrl', artistsIndexCtrl)
        .controller('artistsShowCtrl', artistsShowCtrl)
        .controller('artistsRegisterCtrl', artistsRegisterCtrl)
        .controller('artistsEditCtrl', artistsEditCtrl);

        function artistsIndexCtrl($scope, ArtistsFactory){
          $scope.artists = ArtistsFactory.query();
        }

        function artistsShowCtrl($scope, $stateParams, ArtistsFactory){
          $scope.artist = ArtistsFactory.get({id: $stateParams.id});
        }

        function artistsRegisterCtrl($scope, $state, $stateParams, ArtistsFactory){
          $scope.artist = new ArtistsFactory();
          $scope.registerArtist = function() {
            $scope.artist.$save(function() {
              $state.go('artistsShow', {id: $scope.artist._id});
            });
          };
        }

        function artistsEditCtrl($scope, $state, $stateParams, ArtistsFactory){
          $scope.updateArtist = function() {
            $scope.artist.$update(function() {
              $state.go('artistsShow', {id: $scope.artist._id});
            });
          };

          $scope.loadArtist = function() {
            $scope.artist = ArtistsFactory.get({id: $stateParams.id});
          };

          $scope.loadArtist();
        }
})();
