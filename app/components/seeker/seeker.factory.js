(function(){
  //https://scotch.io/tutorials/node-and-angular-to-do-app-controllers-and-services
  angular
    .module('seekers')
    .factory('Seeker', SeekerFactory)

    SeekerFactory.$inject = ['$http','$scope', 'API_URL'];

    function SeekerFactory($http, API_URL){
      return {
          get : function() {
              return $http.get(`${API_URL}seekers`);
          },
          create : function(artistData) {
              return $http.post(`${API_URL}seekers`, seekerData);
          },
          delete : function(id) {
              return $http.delete(`${API_URL}seekers` + id);
          }
      }
    }
})();
