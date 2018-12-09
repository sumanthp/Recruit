angular.module('recruitApp.LoginController',['recruitApp.Authentication'])
    .controller('LoginController', ['$scope', '$http', 'Authentication', '$httpParamSerializerJQLike', '$state', function ($scope, $http, Authentication, $httpParamSerializerJQLike, $state){
        "use strict";
        $scope.message="Please Enter your credentials";
        $scope.login = function () {
            $http({
                method:"POST", 
                url:"https://recruit-apiservices.herokuapp.com/api/login", 
                data:$httpParamSerializerJQLike($scope.user),
                headers:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'}
            }).success(function(data, status, headers, config){
                if(data.message){
                    $scope.success = data.message;
                    $state.go('recruit')
                }
            }).error(function(data, status, headers, config){
                if(data.message){
                    $scope.success = data.message;
                }
            });
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