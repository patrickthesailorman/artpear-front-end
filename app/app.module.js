(function() {
    angular
    .module('artPearApp', [
      'ngResource',
      'ui.router',
      'artists',
      'responses',
      'seekers',
      'opportunities'
    ])
    .constant('API_URL', 'https://artpear-api.herokuapp.com/api/');

})();
