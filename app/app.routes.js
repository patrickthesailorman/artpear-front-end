(function() {
  angular
    .module("app", [
      "ui.router",
      "ngResource",
      "opportunities",
      "seekers"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])
  function RouterFunction($stateProvider) {
    $stateProvider
      .state("seekerIndex", {
        url: "/seekers",
        templateUrl: "js/index.html",
        controller: "SeekerIndexController",
        controllerAs: "indexVm"
      })
      .state("seekerShow", {
        url: "/seekers/:id",
        templateUrl: "js/show.html",
        controller: "SeekerShowController",
        controllerAs: "showVm"
      })
      .state("opportunityIndex", {
        url: "/opportunities",
        templateUrl: "js/index.html",
        controller: "OpportunityIndexController",
        controllerAs: "indexVm"
      })
      .state("opportunityShow", {
        url: "/opportunities/:id",
        templateUrl: "js/show.html",
        controller: "OpportunitieShowController",
        controllerAs: "showVm"
      });

  }
})();
