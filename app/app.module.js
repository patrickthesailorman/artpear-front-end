(function() {
    angular
    .module('artPearApp', [
      'ngResource',
      'ui.router',
      'artists'
    ])
    .constant('API_URL', 'https://artpear-api.herokuapp.com/api/');

})();
