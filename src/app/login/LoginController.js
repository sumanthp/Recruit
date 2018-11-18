export class LoginController{
  constructor($http,$auth){
    'ngInject';
    this.message="Please Enter your credentials";
    this.$http = $http;
    this.$auth = $auth;
  }
  validateLogin(){
    //this.$http.post("http://localhost:5000/api/login", this.user);
    this.$auth.login(this.user).then(function (message, token) {
      this.message = message;
      if(token)
        this.$auth.setToken(token);
    })
    //this.$http.post("http://localhost:5000/api/login/user",{msg:this.email});
  }

  thirdpartylogin(provider) {
    this.$auth.authenticate(provider);
  }

}


