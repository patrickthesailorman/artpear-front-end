(function() {
    angular
    .module('artPearApp', [
      'ngResource',
      'ui.router',
      'artists'
      // 'seekers'
    ])
    .constant('API_URL', 'https://artpear-api.herokuapp.com/api/');

})();
