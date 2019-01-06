(function () {
    'use strict';

    angular
        .module('recruitApp')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$state', 'AuthenticationService', '$rootScope'];
    function LogoutController($state, AuthenticationService, $rootScope) {
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
        if(AuthenticationService.isLoggedIn()){
            AuthenticationService.Logout();
            $rootScope.isLoggedIn = false;
            $state.go('login');
        }

    }

})();