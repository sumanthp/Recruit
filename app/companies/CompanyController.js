(function () {
    'use strict';
  
    angular
        .module('recruitApp')
        .controller('CompanyController', CompanyController);
  
        CompanyController.$inject = ['$location', 'AuthenticationService', '$scope', '$state'];
    function CompanyController($location, AuthenticationService, $scope, $state) {
       $scope.info = "Hello Company Page here!!"
    }
  
  })();