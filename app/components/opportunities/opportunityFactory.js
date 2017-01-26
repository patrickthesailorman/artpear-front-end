"use strict";

(function(){
  angular
    .module( "opportunity" )
    .factory("OpportunityFactory", OpportunityFactoryFunc);

    OpportunityFactoryFunc.$inject = [ "$resource" ];
    function OpportunityFactoryFunc($resource) {
      return $resource("http://localhost:3000/opportunities/:id", {}, {
        update: { method: "PUT" }
      });
    }

})();
