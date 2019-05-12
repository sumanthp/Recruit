(function(){

    'use strict';

// Declare app level module which depends on views, and core components
angular.module('recruitApp', [
  'ui.router',
  'ngRoute',
  'ngCookies',
  'ngMaterial', 
  'ngMessages',
  'vcRecaptcha',
  'angularFileUpload'
])
.config(config)
.run(run);
config.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider', '$httpProvider'];
function config($locationProvider,  $urlRouterProvider, $stateProvider, $httpProvider) {
  $locationProvider.html5Mode(true);

  $httpProvider.interceptors.push('AuthInterceptors');
  $urlRouterProvider.otherwise('/recruit');

  $stateProvider
  // HOME STATES AND NESTED VIEWS ========================================
      .state('recruit', {
          url: '/recruit',
          templateUrl: 'partial-home.html',
      })

      .state('about', {
          url: '/about',
          templateUrl: 'about/about.html',
      })

      .state('jobs', {
          url: '/jobs',
          templateUrl: 'jobs/jobs.html',
      })

      .state('companies', {
          url: '/companies',
          templateUrl: 'companies/companies.html',
          controller: 'CompanyController'
      })

      .state('contact', {
          url: '/contact',
          templateUrl: 'contact/contact.html',
          controller: 'contactController',
          controllerAs: 'contact'
      })

      .state('editProfile', {
        url: '/editProfile',
        templateUrl: 'editProfile/editProfile.html',
        controller: 'editProfileController',
        controllerAs: 'editProf'
      })

      .state('login', {
          url: '/login',
          templateUrl: 'login/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
      })

      .state('register', {
          url: '/register',
          templateUrl: 'register/register.html',
          controller: 'RegistrationController',
          controllerAs: 'register'
      })

      .state('forgot_password',{
         url: '/forgotpassword',
         templateUrl: 'resetpassword/forgotpassword.html',
          controller: 'ForgotPasswordController',
          controllerAs: 'forgotpassword'
      })

      .state('logout',{
          url: '/logout',
          templateUrl: 'logout/logout.html',
          controller: 'LogoutController',
          controllerAs: 'logout'
      })

      .state('profile',{
          url:'/profile',
          templateUrl:'profile/profile.html',
          controller:'ProfileController',
          controllerAs: 'profile'
      })
      
      .state('otherwise', {
          url : '/recruit',
          templateUrl: 'partial-home.html'
      });

}

run.$inject = ['$rootScope', '$location', '$cookies', '$http', 'AuthenticationService'];
function run($rootScope, $location, $cookies, $http, AuthenticationService) {
    // // keep user logged in after page refresh
    // $rootScope.globals = $cookies.getObject('globals') || {};
    // if ($rootScope.globals.currentUser) {
    //     $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    // }

    $rootScope.$on('$locationChangeStart',function(event, next, user){
        if(AuthenticationService.isLoggedIn()){
            $rootScope.isLoggedIn = true;
            console.log('Success: User is Logged in');
            AuthenticationService.GetUser(function(data){
                console.log(data);
            });
        }else{
            console.log('Failure: User is not Logged in');
        }
    });
}

}) ();
