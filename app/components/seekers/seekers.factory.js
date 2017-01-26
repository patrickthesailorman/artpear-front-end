(function(){
  //https://scotch.io/tutorials/node-and-angular-to-do-app-controllers-and-services
  angular
    .module('seekers')
    .factory('SeekersFactory', SeekersFactory);

    SeekersFactory.$inject = ['$resource', 'API_URL'];

    function SeekersFactory($resource, API_URL) {
      return $resource(`${API_URL}seekers/:id`, {id: '@_id'}, {
        update: {
          method: 'PUT'
        }
      });
    }
})();
