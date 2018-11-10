export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/about/about.html'
    })

    .state('jobs', {
      url: '/jobs',
      templateUrl: 'app/jobs/jobs.html'
    })

    .state('companies', {
      url: '/companies',
      templateUrl: 'app/companies/companies.html'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })

    .state('recruit_login', {
      url: '/login',
      templateUrl: 'app/login/recruit_login.html'

    })

    .state('register', {
      url: '/register',
      templateUrl: 'app/register/register.html',
      controller: 'RegistrationController',
      controllerAs: 'register'
    })

    .state('recruit_register', {
      url: '/register',
      templateUrl: 'app/register/recruit_register.html'
    })

    .state('forgot_password',{
      url: '/forgotpassword',
      templateUrl: 'app/resetpassword/forgotpassword.html',
      controller: 'ForgotPasswordController',
      controllerAs: 'forgotpassword'
    });

  $urlRouterProvider.otherwise('/');
}
