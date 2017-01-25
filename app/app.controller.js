(function() {
    'use strict';

    angular
        .module('artPear', ['ngMaterial'])
        .controller('mainController', appControllerFunction);

    // mainAppController.$inject = [];

    function appControllerFunction() {
        var mainVm = this;

        activate();

        function activate() {
          // var vm = this;
          console.log(`appController is this working and this = ${mainVm}`);
          // mainVm.currentNavItem = 'page1';
        }
    }
})();
