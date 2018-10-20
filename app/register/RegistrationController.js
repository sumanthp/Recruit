angular.module('recruitApp.RegistrationController',['recruitApp.Authentication'])
    .controller('RegistrationController', ['$scope', 'Authentication', function ($scope, Authentication){
        "use strict";
        $scope.message="Register with your Email Id";
        $scope.register = function () {
            Authentication.register($scope.user);
        };

}]);