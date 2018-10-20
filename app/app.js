
// Declare app level module which depends on views, and components
var routerApp = angular.module('recruitApp', ['ui.router','recruitApp.LoginController', 'recruitApp.RegistrationController', 'firebase', 'recruitApp.Authentication']);
/*routerApp.controller('LoginController', 'RegistrationController', ['$scope', function ($scope) {
    $scope.message = 'Welcome to Recruit';
}]);*/
routerApp.config(function($stateProvider, $urlRouterProvider) {
    "use strict";
    $urlRouterProvider.otherwise('/recruit');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('recruit', {
            url: '/recruit',
            templateUrl: 'partial-home.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'about/about.html'
        })

        .state('jobs', {
            url: '/jobs',
            templateUrl: 'jobs/jobs.html'
        })

        .state('companies', {
            url: '/companies',
            templateUrl: 'companies/companies.html'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'contact/contact.html'
        })

        .state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'LoginController'

        })

        .state('recruit_login', {
            url: '/login',
            templateUrl: 'login/recruit_login.html'

        })

        .state('register', {
            url: '/register',
            templateUrl: 'register/register.html',
            controller: 'RegistrationController'
        })

        .state('recruit_register', {
            url: '/register',
            templateUrl: 'register/recruit_register.html'
        });

});
