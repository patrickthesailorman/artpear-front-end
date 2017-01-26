(function() {
    angular
    .module('artPearApp', [
      'ngResource',
      'ui.router',
      'artists',
      'responses'
      'artists'
      // 'seekers'
      'opportunities'
    ])
    .constant('API_URL', 'https://artpear-api.herokuapp.com/api/');

})();
