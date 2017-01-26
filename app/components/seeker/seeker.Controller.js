(function() {
    'use strict';

    angular
        .module('seekers', [])
        .controller('seekerCntrl', seekerCntrl);

    seekerCntrl.$inject = ['$http','$scope', 'API_URL'];
    // var rootURL = "https://artpear-api.herokuapp.com/api"
    /* @ngInject */
    function seekerCntrl($http,$scope,API_URL) {
        // **** INDEX
       $scope.getSeeker = function(){
          $http.get(`${API_URL}seekers`)
            .then(function(res){
              $scope.seekers = res.data;
              console.log($scope.seekers);
            })
            .catch(function(err){
              if(err)console.log(err);
            });
        }
        // $scope.getArtist();
        /// **** Show
        $scope.showSeeker = function(id){
          $http.get(`${API_URL}seekers/${id}`)
            .then(function(res){
              $scope.seekers = res.data;
              console.log($scope.seekers);
            })
            .catch(function(err){
              if(err)console.log(err);
            });
        }

        // **** New
        $scope.createSeeker = function(seeker){
          seeker = {
            seeker: seeker
          };
          $http.post(`${API_URL}seekers`, seeker)
            .then(function(res){
              console.log(res.data);
            })
            .catch(function(err){
              if(err)console.log(err);
            });
        };

        /// ****** Edit
        $scope.editSeeker = function(seeker){
          $http.put(`${API_URL}seekers/${$scope.seeker.id}`, seeker)
            .then(function(res){
              // $scope.getGrumbles(); //REdirect to Index
              $scope.seeker = res.data;
              console.log(res.data);
            })
            .catch(function(err){
              if(err)console.log(err);
            });
        };
    }
})();
