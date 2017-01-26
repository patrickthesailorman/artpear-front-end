(function(){
   angular
     .module('opportunity')
     .directive('opportunityIndex', opportunityIndex);

   function opportunityIndex(){
     return {
       restrict: 'A',
       template: '<div ng-hide="opportunity" ng-repeat="opportunity in opportunities">' +
         '<h3 ng-click="showOpportunity(e.id)">{{e.title}}</h3>'+
       '</div>' +
       '<form ng-hide="opportunity" ng-submit="createOpportunity(newOpportunity)">' +
         '<h4>New Opportunity</h4>' +
         '<label for="seekerName">Seeker</label><br>' +
         '<input type="text" ng-model="newOpportunity.seekerName"><br>' +
         '<label for="title">Title</label><br>' +
         '<input type="text" ng-model="newOpportunity.title"><br>' +
         '<label for="content">Content</label><br>' +
         '<input type="text" ng-model="newOpportunity.content"><br>' +
         '<label for="photoUrl">Photo URL</label><br>' +
         '<input type="text" ng-model="newOpportunity.photoUrl"><br>' +
         '<input type="submit" value="Submit">' +
       '</form>'
     };
   };
 })();
