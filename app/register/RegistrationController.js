angular.module('recruitApp.RegistrationController',['recruitApp.Authentication'])
    .controller('RegistrationController', ['$scope', '$http', 'Authentication', '$httpParamSerializerJQLike', '$state', function ($scope, $http, Authentication, $httpParamSerializerJQLike, $state){
        "use strict";
        $scope.message="Register with your Email Id";
        $scope.register = function () {
            //Authentication.register($scope.user);
            $http({
                method:"POST", 
                url:"https://recruit-apiservices.herokuapp.com/api/register", 
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
}]);