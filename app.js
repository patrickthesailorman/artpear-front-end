(function(){
  angular
  .module('artpear',['ui.router'])
})();

var app = angular.module('artpear', []);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html'
      controller: 'MainCtrl'
    });
    $urlRouterProvider.otherwise('home');
  }]);
app.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = [
      {title:'post 1', upvotes: 5},
      {title:'post 2', upvotes: 4},
      {title:'post 3', upvotes: 12},
      {title:'post 4', upvotes: 14},
      {title:'post 5', upvotes: 2}
];
$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  $scope.posts.push({
    title: $scope.title,
    link: $scope.link,
    upvotes: 0
  });
  $scope.title = '';
  $scope.link = '';
};
$scope.incrementUpvotes = function(post) {
  post.upvotes +=1;
};
  }
]);

  app.factory('posts', [function(){
    var o = {
      posts: []
    };
    return o;
  }]);
