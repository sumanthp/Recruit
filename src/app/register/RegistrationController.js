export class RegistrationController{
  constructor($http,$auth){
    'ngInject';
    this.message="Register with your Email Id";
    this.$http = $http;
    this.$auth = $auth;
  }
  register(){
    this.$auth.signup(this.user);
    //this.$http.post('http://localhost:5000/api/login/user', {"Sumanth":"loginbody"});
  }
}
