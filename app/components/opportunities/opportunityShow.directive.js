(function(){
   angular
     .module('opportunity')
     .directive('opportunityShow', OpportunityShow);

   function OpportunityShow(){
     return {
       restrict: 'E',
       template: '<div ng-show="opportunity">' +
         '<h3>{{opportunity.title}}</h3>' +
         '<h5>{{opportunity.seekerName}}</h5>' +
         '<button ng-click="destroyOpportunity(opportunity.id)">Delete Opportunity</button>' +
         '<img src="{{opportunity.photoUrl}}" alt="photo">' +
       '</div>' +
       '<form ng-show="opportunity" ng-submit="editOpportunity(opportunity)">' +
         '<h4>Edit Opportunity</h4>' +
         '<label for="seekerName">Seeker</label><br>' +
         '<input type="text" ng-model="opportunity.seekerName"><br>' +
         '<label for="title">Title</label><br>' +
         '<input type="text" ng-model="opportunity.title"><br>' +
         '<label for="content">Content</label><br>' +
         '<input type="text" ng-model="opportunity.content"><br>' +
         '<label for="photoUrl">Photo URL</label><br>' +
         '<input type="text" ng-model="opportunity.photoUrl"><br>' +
         '<input type="submit" value="Submit">' +
       '</form>'
     };
   };
 })();
