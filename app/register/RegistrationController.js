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
        $scope.create = createUser;

        (function initController() {
            // reset register status
            AuthenticationService.ClearCredentials();
        })();

        function createUser() {
            $scope.dataLoading = true;
            AuthenticationService.Register($scope.user, function (response) {
                if (response.success) {
                    $scope.dataLoading = false;
                    $scope.successMsg = response.data.message;
                    AuthenticationService.SetCredentials($scope.user);
                    $state.go('profile');
                } else {
                    //FlashService.Error(response.message);
                    $scope.dataLoading = false;
                    $scope.errorMsg = response.data.message;
                }
            });
        };
    }

})();