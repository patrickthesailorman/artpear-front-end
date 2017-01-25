(function() {
    'use strict';

    angular
        .module('artPear', [])
        .controller('artistController', artistControllerFunction);

    // Controller.$inject = [''];

    /* @ngInject */
    function artistControllerFunction() {
        var vm = this;

        activate();

        function activate() {
          // var vm = this;
          console.log(`artistController is this working and this = ${vm}`)
        }
    }
})();
