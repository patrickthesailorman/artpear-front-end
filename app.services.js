(function(){

  angular
      .module('artPearApp')
      .factory('Artist', [ '$resource',
        function ($resource) {
          return $resource('/artists', {}, {
          query: { method: "GET", isArray: true },
          create: { method: "POST"},
          get: { method: "GET" },
          remove: { methos:"DELETE"},
          update: {methos: "products"}
        })
      }]);

      function Resource($resource){
        return $resource('https://artpear-api.herokuapp.com/api/artists/:id')
      }
})();


///  See more at: http://www.tothenew.com/blog/angulars-resource-for-crud-operations/#sthash.twMvaNwV.dpuf
