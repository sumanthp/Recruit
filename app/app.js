(function () {
    'use strict';

    angular
        .module('recruitApp', ['ui.router', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
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
            })
    
            .state('contact', {
                url: '/contact',
                templateUrl: 'contact/contact.html',
            })
    
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm'
            })
    
            .state('recruit_login', {
                url: '/login',
                templateUrl: 'login/recruit_login.html'
    
            })
    
            .state('register', {
                url: '/register',
                templateUrl: 'register/register.html',
                controller: 'RegistrationController',
                controllerAs: 'vm'
            })
    
            .state('recruit_register', {
                url: '/register',
                templateUrl: 'register/recruit_register.html'
            })
    
            .state('forgot_password',{
               url: '/forgotpassword',
               templateUrl: 'resetpassword/forgotpassword.html',
                controller: 'ForgotPasswordController',
                controllerAs: 'vm'
            });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/recruit');
            }else{
                $location.path('/about');
            }
        });
    }

})();

// Declare app level module which depends on views, and components
// var routerApp = angular.module('recruitApp', ['ui.router','recruitApp.LoginController', 'recruitApp.RegistrationController', 'recruitApp.ForgotPasswordController', 'firebase', 'recruitApp.Authentication']);
// /*routerApp.controller('LoginController', 'RegistrationController', ['$scope', function ($scope) {
//     $scope.message = 'Welcome to Recruit';
// }]);*/

// routerApp.config(function($stateProvider, $urlRouterProvider) {
//     "use strict";
//     $urlRouterProvider.otherwise('/recruit');

//     $stateProvider

//     // HOME STATES AND NESTED VIEWS ========================================
//         .state('recruit', {
//             url: '/recruit',
//             templateUrl: 'partial-home.html'
//         })

//         .state('about', {
//             url: '/about',
//             templateUrl: 'about/about.html'
//         })

//         .state('jobs', {
//             url: '/jobs',
//             templateUrl: 'jobs/jobs.html'
//         })

//         .state('companies', {
//             url: '/companies',
//             templateUrl: 'companies/companies.html'
//         })

//         .state('contact', {
//             url: '/contact',
//             templateUrl: 'contact/contact.html'
//         })

//         .state('login', {
//             url: '/login',
//             templateUrl: 'login/login.html',
//             controller: 'LoginController'

//         })

//         .state('recruit_login', {
//             url: '/login',
//             templateUrl: 'login/recruit_login.html'

//         })

//         .state('register', {
//             url: '/register',
//             templateUrl: 'register/register.html',
//             controller: 'RegistrationController'
//         })

//         .state('recruit_register', {
//             url: '/register',
//             templateUrl: 'register/recruit_register.html'
//         })

//         .state('forgot_password',{
//            url: '/forgotpassword',
//            templateUrl: 'resetpassword/forgotpassword.html',
//             controller: 'ForgotPasswordController'
//         });

// });

// routerApp.run(['$rootScope', '$location', '$cookieStore', '$http',
// function ($rootScope, $location, $cookieStore, $http) {
//     // keep user logged in after page refresh
//     $rootScope.globals = $cookieStore.get('globals') || {};
//     if ($rootScope.globals.currentUser) {
//         $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//     }

//     $rootScope.$on('$locationChangeStart', function (event, next, current) {
//         // redirect to login page if not logged in
//         if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
//             $location.path('/login');
//         }
//     });
// }]);