(function () {
    'use strict';
  
    angular
        .module('recruitApp')
        .controller('editProfileController', editProfileController);
  
        editProfileController.$inject = ['$location', '$scope', '$state'];
        function editProfileController($location, $scope, $state) 
        {
            $scope.profile = {name:"", option:'yes', Designation:'', };
        }
  })();