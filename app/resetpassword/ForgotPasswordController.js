angular.module('recruitApp.ForgotPasswordController',['recruitApp.Authentication'])
        .controller('ForgotPasswordController', ['$scope','Authentication', function ($scope, Authentication) {
            "use strict";
            $scope.message='Provide your Email Id to Reset Password';
            $scope.forgotpassword = function(){
                Authentication.forgotpassword($scope.user);
            };
        }]);