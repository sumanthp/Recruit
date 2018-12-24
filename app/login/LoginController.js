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
        $scope.facebookLogin = facebook_login;
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.user, function (response) {
                if (response.success) {
                    $scope.dataLoading = false;
                    $scope.successMsg = response.data.message;
                    AuthenticationService.SetCredentials($scope.user);
                    $location.path('/about');
                } else {
                    $scope.errorMsg = response.data.message;
                    $scope.dataLoading = false;
                }
            });
        };

        function facebook_login(){
            $scope.dataLoading = true;
            AuthenticationService.FacebookLogin(function(response){
                if(response.email){
                    $scope.successMsg = response.data.message;
                    $location.path('/home');
                }else{
                    $scope.errorMsg = response.message;
                }
            });
        };
    }

})();