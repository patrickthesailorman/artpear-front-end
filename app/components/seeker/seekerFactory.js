"use strict";

(function(){
  angular
    .module( "seeker" )
    .factory("SeekerFactory", SeekerFactoryFunc);

    SeekerFactoryFunc.$inject = [ "$resource" ];
    function SeekerFactoryFunc($resource) {
      return $resource("http://localhost:3000/seekers/:id", {}, {
        update: { method: "PUT" }
      });
    }

})();
