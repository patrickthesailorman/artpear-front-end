(function() {
    'use strict';

    angular
        .module('artPear', [])
        .controller('artistController', artistControllerFunction);

    // Controller.$inject = [''];

    /* @ngInject */
    function artistControllerFunction() {
      console.log(`is this working`);
        // var vm = this;
        //
        // activate();
        //
        // function activate() {
        //   var vm = this;
        //   console.log(`is this working`)
        // }
    }
})();
