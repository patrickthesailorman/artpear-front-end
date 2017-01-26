(function(){
  //https://scotch.io/tutorials/node-and-angular-to-do-app-controllers-and-services
  angular
    .module('responses')
    .factory('ResponsesFactory', ResponsesFactory);

    ResponsesFactory.$inject = ['$resource', 'API_URL'];

    function ResponsesFactory($resource, API_URL) {
      return $resource(`${API_URL}responses/:id`, {id: '@_id'}, {
        update: {
          method: 'PUT'
        }
      });
    }
})();
