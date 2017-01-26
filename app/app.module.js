(function() {
    angular
    .module('artPearApp', [
      'ngResource',
      'ui.router',
      'artists',
      'responses'
    ])
    .constant('API_URL', 'https://artpear-api.herokuapp.com/api/');

})();
