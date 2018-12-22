(function () {
    'use strict';

    angular
        .module('recruitApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', '$scope'];
    function LoginController($location, AuthenticationService, $scope) {
        var vm = this;
        $scope.message = "Please Enter your credentials";
        $scope.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.user, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials($scope.user);
                    $location.path('/');
                } else {
                    //FlashService.Error(response.message);
                    $scope.message = response.data.message;
                    $scope.dataLoading = false;
                    //$location.path('/login');
                }
            });
        };
    }

})();