(function() {
    angular
    .module('artPearApp', [
      'ngResource',
      'ngRoute',
      'ui.router',
      'artists'
    ])
    .constant('API_URL', 'https://artpear-api.herokuapp.com/api/');

})();
