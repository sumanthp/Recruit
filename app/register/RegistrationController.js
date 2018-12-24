(function () {
    'use strict';

    angular
        .module('recruitApp')
        .controller('RegistrationController', RegistrationController);

        RegistrationController.$inject = ['$location', 'AuthenticationService', '$scope'];
    function RegistrationController($location, AuthenticationService, $scope) {
        var vm = this;
        $scope.message = "Register with your Email Id";
        $scope.register = register;

        (function initController() {
            // reset register status
            AuthenticationService.ClearCredentials();
        })();

        function register() {
            $scope.dataLoading = true;
            AuthenticationService.Register($scope.user, function (response) {
                if (response.success) {
                    $scope.dataLoading = false;
                    $scope.successMsg = response.data.message;
                    AuthenticationService.SetCredentials($scope.user);
                    $location.path('/about');
                } else {
                    //FlashService.Error(response.message);
                    $scope.dataLoading = false;
                    $scope.errorMsg = response.data.message;
                }
            });
        };
    }

})();