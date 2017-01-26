(function(){
  angular
  .module('seeker')
  .controller('Seeker', Seeker);

})();

SeekerCtrl.$inject = ['$http', '$scope'];

  function SeekerCtrl($http, $scope) {
    // var self = this;
    var rootURL = 'http://localhost:3000';
//index
    $scope.getSeekers = function(){
    //   $http.get(`${rootURL}/seekers`)
      Seeker.get()
        .then(function(res){
          Seeker.Seekers = res.data;
          $scope.seekers = Seekers;
          $scope.seeker = undefined;
          //console.log($scope.seekers);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };
//show
    $scope.showSeeker = function(id){
      $http.get(`${rootURL}/seekers/${id}`)
        .then(function(res){
          $scope.seeker = res.data;
          console.log($scope.seeker);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

//delete
$scope.destroySeeker = function(id){
  $http.delete(`${rootURL}/seeker/${id}`)
    .then(function(res){
      $scope.seeker = undefined;
      $scope.getSeeker();
      console.log($scope.seeker);
    })
    .catch(function(err){
      if(err)console.log(err);
    });
  };
//create
$scope.createSeeker = function(id){
  $http.post(`${rootURL}/Seekers/`,$scope.newSeeker)
    .then(function(res){
      $scope.seekers= res.data;
      console.log($scope.seekers);
    })
    .catch(function(err){
      if(err)console.log(err);
    });
  };
// edit
  $scope.editSeeker = function(seeker){
    $http.put(`${rootURL}/seekers/${$scope.seeker.id}`,seeker)
      .then(function(res){
        //$scope.getSeekers(); //REdirect to Index
        $scope.seeker = res.data;
        $scope.getSeekers();
        console.log($scope.seekers);
      })
      .catch(function(err){
        if(err)console.log(err);
      });
    };
};
