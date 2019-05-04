(function () {
  'use strict';

  angular
      .module('recruitApp')
      .controller('RegistrationController', RegistrationController);

      RegistrationController.$inject = ['$location', 'AuthenticationService', '$scope', '$state'];
  function RegistrationController($location, AuthenticationService, $scope, $state) {
      $scope.registrants = ["Student", "Recruiter"];
      //envService.set('development');
      var vm = this;
      $scope.message = "Register with your Email Id";
      $scope.createStudent = createUser;
      $scope.createRecruiter = createRecruiterUser;

      (function initController() {
          // reset register status
          AuthenticationService.ClearCredentials();
      })();

      function createUser() {
          $scope.dataLoading = true;
          $scope.user.dob = new Date($scope.user.dob);
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

      function createRecruiterUser() {
          $scope.dataLoading = true;
          AuthenticationService.RegisterRecruiter($scope.user, function (response) {
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