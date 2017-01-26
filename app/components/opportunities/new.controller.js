(function(){
   angular
     .module('opportunity')
     .controller('newCtrl', newCtrl);

   newCtrl.$inject = ['OpportunityFactory'];

   function newCtrl(OpportunityFactory){
     this.showOpportunities = function(){
       console.log('New Controller', OpportunityFactory.opportunities);
     }
   };
 })();
