// 'use strict';

// angular.module('recruitApp.LoginController', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/login', {
//     templateUrl: 'login/login.html',
//     controller: 'LoginController'
//   });
// }])

// .controller('LoginController', [function() {

// }]);
(function () {
  'use strict';

  angular
      .module('recruitApp')
      .controller('LoginController', LoginController);    

  LoginController.$inject = ['$state', 'AuthenticationService', '$scope', '$timeout'];
  function LoginController($state, AuthenticationService, $scope, $timeout) {
      var login = this;
      $scope.message = "Please Enter your credentials";
      login.isLoggedIn = isLoggedIn;
      login.isLoggedOut = isLoggedOut;
      $scope.authenticate = auth;
      $scope.facebookLogin = facebook_login;
      (function initController() {
          // reset login status
          AuthenticationService.ClearCredentials();
      })();

      function auth() {
          $scope.dataLoading = true;
          AuthenticationService.Login($scope.user, function (response) {
              if (response.success) {
                  $scope.dataLoading = false;
                  $scope.successMsg = response.data.message;
                  AuthenticationService.SetCredentials($scope.user);
                  $state.go('profile');
                  $scope.user = '';
                  $scope.successMsg = false;
              } else {
                  $scope.errorMsg = response.data.message;
                  $scope.dataLoading = false;
              }
          });
      };

      function facebook_login(){
          $scope.dataLoading = true;
          $timeout(function(){
              AuthenticationService.FacebookLogin(function(response){
                  if(response.email){
                      $scope.successMsg = response.data.message;
                      $state.go('profile');
                      $scope.successMsg = false;
                  }else{
                      $scope.dataLoading = false;
                      $scope.errorMsg = response.message;
                  }
              });
          },5000, $scope.errorMsg="Failed to redirect to facebook");

      };

      function isLoggedIn(){
          if(AuthenticationService.isLoggedIn()){
              console.log('Success: User is Logged in');
              AuthenticationService.GetUser();
              return true;
          }else{
              console.log('Failure: User is not Logged in');
              return false;
          }
      };

      function isLoggedOut(){
          if(AuthenticationService.isLoggedIn()){
              console.log('Success: User is Logged in');
              return false;
          }else{
              console.log('Failure: User is not Logged in');
              return true;
          }
      }


  }

})();