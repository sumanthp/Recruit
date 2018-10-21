angular.module('recruitApp.LoginController',['recruitApp.Authentication'])
    .controller('LoginController', ['$scope', 'Authentication', function ($scope,Authentication){
        "use strict";
        $scope.message="Please Enter your credentials";
        $scope.login = function () {
            Authentication.login($scope.user);
        };
        $scope.facebookLogin = function(){
            Authentication.facebookLogin();
        };
        $scope.linkedinLogin = function(){
            Authentication.linkedinLogin();
        };
        $scope.googleLogin = function(){
            Authentication.googleLogin();
        };

}]);