(function () {
    'use strict';

    angular
        .module('recruitApp')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$state', 'AuthenticationService', '$scope'];
    function ProfileController($state, AuthenticationService, $scope) {

    }

})();