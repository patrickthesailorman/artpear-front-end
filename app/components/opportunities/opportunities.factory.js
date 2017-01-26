(function(){
  //https://scotch.io/tutorials/node-and-angular-to-do-app-controllers-and-services
  angular
    .module('opportunities')
    .factory('OpportunitiesFactory', OpportunitiesFactory);

    OpportunitiesFactory.$inject = ['$resource', 'API_URL'];

    function OpportunitiesFactory($resource, API_URL) {
      return $resource(`${API_URL}opportunities/:id`, {id: '@_id'}, {
        update: {
          method: 'PUT'
        }
      });
    }
})();
