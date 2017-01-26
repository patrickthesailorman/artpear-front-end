(function(){  /////// WORKING
  angular
  .module('artPearApp')
  .controller('ArtistCntrl', ArtistCntrl)

  ArtistCntrl.$inject = ['$http', '$scope'];
  var rootURL = "https://artpear-api.herokuapp.com/api";

  function ArtistCntrl($http, $scope){
    console.log(`Working Artist ${rootURL}`);/// This is Working
    $scope.getArtist = function(){
      $http.get(`https://artpear-api.herokuapp.com/api/artists`)
      .then(function(res){
        $scope.artists = res.data;
        console.log($scope.artists);
      })
      .catch(function(err){
         if(err)console.log(err);
       });
    }
    $scope.showArtist = function(id){
     $http.get(`https://artpear-api.herokuapp.com/api/artists/${id}`)
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
       $http.post(`https://artpear-api.herokuapp.com/api/artists/`, artist)
         .then(function(res){
           console.log('res.data');
         })
         .catch(function(err){
           if(err)console.log(err);
         });
     }
  }
})();


// (function() {
//     angular
//         .module('artPearApp')
//         .controller('ArtPearCtlr', ArtPearCtlr);
//
//     ArtPearCtlr.$inject = ['$http', '$scope'];
//     var rootURL = "https://artpear-api.herokuapp.com/api"
//
//     function ArtPearCtlr($http, $scope){
//       $scope.getArtist = function(){
//          $http.get(`${rootURL}/artists`)
//            .then(function(res){
//              $scope.artists = res.data;
//              console.log($scope.artists);
//            })
//            .catch(function(err){
//              if(err)console.log(err);
//            });
//        }
//        $scope.getArtist();
//
//        /// **** Show
//        $scope.showArtist = function(id){
//          $http.get(`https://artpear-api.herokuapp.com/api/artists/${id}`)
//            .then(function(res){
//              $scope.artists = res.data;
//              console.log($scope.artists);
//            })
//            .catch(function(err){
//              if(err)console.log(err);
//            });
//        }
//       //  $scope.showArtist("5888fa663ac28b000418f17c");
//
//       // **** New
//       $scope.createArtist = function(artist){
//         $http.post(`https://artpear-api.herokuapp.com/api/artists`, artist)
//           .then(function(res){
//             $scope.
//             console.log(res.data);
//           })
//           .catch(function(err){
//             if(err)console.log(err);
//           });
//       };
//
//         console.log("WORKING");
//     }
//
// })();
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
