export class LoginController{
  constructor($http){
    'ngInject';
    this.message="Please Enter your credentials";
    this.$http = $http;
  }

  validateLogin(){
    this.$http.post("http://localhost:5000/api/login/user",{msg:this.email});
  }

  facebookLogin( ) {

  }


  linkedinLogin(){

  }

  googleLogin(){

  }

}


