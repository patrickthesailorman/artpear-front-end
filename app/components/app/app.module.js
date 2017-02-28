(function() {
    angular
    .module('artPearApp', [
      'ngResource',
      'ui.router',
      'ngCookies',
      'auth',
      'artists',
      'responses',
      'seekers',
      'opportunities'
    ])
    .constant('API_URL', 'https://artpear-api.herokuapp.com/api/');
})();
