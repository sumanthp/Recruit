export class RegistrationController{
  constructor($http,$auth){
    'ngInject';
    this.message="Register with your Email Id";
    this.$http = $http;
    this.$auth = $auth;
  }
  register(){
    this.$auth.signup(this.user).then(function(message,token){
      this.message = message;
      if(token){
        this.$auth.setToken(token);
      }
    });
    //this.$http.post('http://localhost:5000/api/login/user', {"Sumanth":"loginbody"});
  }
}
