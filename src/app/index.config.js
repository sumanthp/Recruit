export function config ($logProvider, toastrConfig, $authProvider, API_URL) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  $authProvider.facebook({
    clientId: '912201792307025',
    responseType : 'token'
  });
  $authProvider.google({
    clientId: ''
  });
  $authProvider.linkedin({
    clientId: ''
  });
  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  $authProvider.signupUrl = API_URL + 'api/register';
  $authProvider.loginUrl = API_URL + 'api/login';
}
