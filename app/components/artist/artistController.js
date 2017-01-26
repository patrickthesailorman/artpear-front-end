(function() {
    'use strict';

    angular
        .module('artists', [])
        .controller('artistCntrl', artistCntrl);

    artistCntrl.$inject = ['$http','$scope'];
    var rootURL = "https://artpear-api.herokuapp.com/api"
    /* @ngInject */
    function artistCntrl($http,$scope) {
        var vm = this;

        // **** INDEX
       $scope.getArtist = function(){
          $http.get(`${rootURL}/artists`)
            .then(function(res){
              $scope.artists = res.data;
              console.log($scope.artists);
            })
            .catch(function(err){
              if(err)console.log(err);
            });
        }
        $scope.getArtist();
        /// **** Show
        $scope.showArtist = function(id){
          $http.get(`${rootURL}/artists/${id}`)
            .then(function(res){
              $scope.artists = res.data;
              console.log($scope.artists);
            })
            .catch(function(err){
              if(err)console.log(err);
            });
        }

        // **** New
        $scope.createArtist = function(artist){
          $http.post(`${rootURL}/artists`, artist)
            .then(function(res){
              console.log(res.data);
            })
            .catch(function(err){
              if(err)console.log(err);
            });
        };

        /// ****** Edit
        $scope.editArtist = function(artist){
          $http.put(`${rootURL}/artists/${$scope.artist.id}`, artist)
            .then(function(res){
              // $scope.getGrumbles(); //REdirect to Index
              $scope.artist = res.data;
              console.log(res.data);
            })
            .catch(function(err){
              if(err)console.log(err);
            });
        };
    }
})();
