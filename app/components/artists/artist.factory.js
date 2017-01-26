(function(){
  //https://scotch.io/tutorials/node-and-angular-to-do-app-controllers-and-services
  angular
    .module('artist')
    .factory('Artist', ArtistFactory)

    ArtistFactory.$inject = ['$http','$scope', 'API_URL'];

    function ArtistFactory($http, API_URL){
      return {
          get : function() {
              return $http.get(`${API_URL}artists`);
          },
          create : function(artistData) {
              return $http.post(`${API_URL}artists`, artistData);
          },
          delete : function(id) {
              return $http.delete(`${API_URL}artists` + id);
          }
      }
    }
})();
