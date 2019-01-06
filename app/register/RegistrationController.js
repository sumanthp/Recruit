(function () {
    'use strict';

    angular
        .module('recruitApp')
        .controller('RegistrationController', RegistrationController);

        RegistrationController.$inject = ['$location', 'AuthenticationService', '$scope'];
    function RegistrationController($location, AuthenticationService, $scope) {
        $scope.registrants = ["Student", "Recruiter"];
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
                    AuthenticationService.SetCredentials($scope.user);
                    $location.path('/about');
                } else {
                    //FlashService.Error(response.message);
                    $scope.dataLoading = false;
                    $scope.message = response.data.message;
                }
            });
        };
    }

})();