(function() {
  // ‘use strict’;
   $rootScope.$on('$routeChangeSuccess', function(event, current) {
     $scope.currentLink = getCurrentLinkFromRoute(current);
   });
});
