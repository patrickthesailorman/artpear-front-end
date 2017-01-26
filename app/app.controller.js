(function(){  /////// WORKING
  angular
  .module('artPearApp')
  .controller('ArtistCntrl', ArtistCntrl)

  ArtistCntrl.$inject = ['$http', '$scope','API_URL'];
  // var rootURL = "https://artpear-api.herokuapp.com/api/";

  function ArtistCntrl($http, $scope, API_URL){
    console.log(`Working Artist ${API_URL}`);/// This is Working
    $scope.getArtist = function(){
      $http.get(`${API_URL}artists`)
      .then(function(res){
        $scope.artists = res.data;
        console.log($scope.artists);
      })
      .catch(function(err){
         if(err)console.log(err);
       });
    }
    $scope.showArtist = function(id){
     $http.get(`${API_URL}artists/${id}`)
       .then(function(res){
         $scope.artists = res.data;
         console.log($scope.artists);
       })
       .catch(function(err){
         if(err)console.log(err);
       });
   }
  //  **** New
     $scope.createArtist = function(artist){
       console.log(artist);
       $http.post(`h${API_URL}artists/`, artist)
         .then(function(res){
           console.log('res.data');
         })
         .catch(function(err){
           if(err)console.log(err);
         });
     }
  }
})();
// (function(){
//   angular
//       .module('artPearApp')
//       .controller('ArtistCntrl', ArtistCntrl);
//
//       function ArtistCntrl($scope, Artist){
//         var artist = Artist.get({ id: $scope.id}, function() {
//           console.log(artist);
//         });
//         var artists = Artist.query(function(){
//           console.log(artists);
//         });
//         $scope.artist = new Artist();
//
//         $scope.artist.data = 'some data';
//
//         Artist.save($scope.entry, function(){
//           console.log("CREATED");
//         });
//
//       }
// })();
