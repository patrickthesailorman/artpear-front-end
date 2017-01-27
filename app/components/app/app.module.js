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
    .constant('API_URL', 'http://localhost:3000/api/');

})();
