(function(){
  angular
  .module('opportunity')
  .controller('Opportunity', OpportunityCtrl);



OpportunityCtrl.$inject = ['$http', '$scope'];

  function OpportunityCtrl($http, $scope) {
    // var self = this;
    var rootURL = 'http://localhost:3000';
//index
    $scope.getOpportunities = function(){
    //   $http.get(`${rootURL}/opportunities`)
      Opportunity.get()
        .then(function(res){
          Opportunity.Opportunities = res.data;
          $scope.opportunities = Opportunities;
          $scope.opportunity = undefined;
          //console.log($scope.opportunities);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };
//show
    $scope.showOpportunity = function(id){
      $http.get(`${rootURL}/opportunities/${id}`)
        .then(function(res){
          $scope.opportunity = res.data;
          console.log($scope.opportunity);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

//delete
$scope.destroyOpportunity = function(id){
  $http.delete(`${rootURL}/opportunity/${id}`)
    .then(function(res){
      $scope.opportunity = undefined;
      $scope.getOpportunity();
      console.log($scope.opportunity);
    })
    .catch(function(err){
      if(err)console.log(err);
    });
  };
//create
$scope.createOpportunity = function(id){
  $http.post(`${rootURL}/Opportunities/`,$scope.newOpportunity)
    .then(function(res){
      $scope.opportunities= res.data;
      console.log($scope.opportunities);
    })
    .catch(function(err){
      if(err)console.log(err);
    });
  };
// edit
  $scope.editOpportunity = function(opportunity){
    $http.put(`${rootURL}/opportunities/${$scope.opportunity.id}`,opportunity)
      .then(function(res){
        //$scope.getOpportunities(); //REdirect to Index
        $scope.opportunity = res.data;
        $scope.getOpportunities();
        console.log($scope.opportunities);
      })
      .catch(function(err){
        if(err)console.log(err);
      });
    };
};
})();
