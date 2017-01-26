(function(){
  //https://scotch.io/tutorials/node-and-angular-to-do-app-controllers-and-services
  angular
    .module('artists')
    .factory('ArtistsFactory', ArtistsFactory);

    ArtistsFactory.$inject = ['$resource', 'API_URL'];

    function ArtistsFactory($resource, API_URL) {
      return $resource(`${API_URL}artists/:id`, {id: '@_id'}, {
        update: {
          method: 'PUT'
        }
      });
    }
})();
