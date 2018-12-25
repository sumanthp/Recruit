(function () {
    'use strict';

    angular
        .module('recruitApp', ['ui.router', 'ngCookies', 'ngMaterial', 'ngMessages', 'vcRecaptcha'])
        .config(config)
        .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
    function config($stateProvider, $urlRouterProvider, $httpProvider) {
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
            })
    
            .state('contact', {
                url: '/contact',
                templateUrl: 'contact/contact.html',
            })
    
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            })
    
            .state('recruit_login', {
                url: '/login',
                templateUrl: 'login/recruit_login.html'
    
            })
    
            .state('register', {
                url: '/register',
                templateUrl: 'register/register.html',
                controller: 'RegistrationController',
                controllerAs: 'register'
            })
    
            .state('recruit_register', {
                url: '/register',
                templateUrl: 'register/recruit_register.html'
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
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http', 'AuthenticationService'];
    function run($rootScope, $location, $cookies, $http, AuthenticationService) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

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
        // $rootScope.$on('$locationChangeStart', function (event, next, current) {
        //     // redirect to login page if not logged in and trying to access a restricted page
        //     var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
        //     var loggedIn = $rootScope.globals.currentUser;
        //     if (restrictedPage && !loggedIn) {
        //         $location.path('/recruit');
        //     }else{
        //         $location.path('/about');
        //     }
        // });
    }

})();
