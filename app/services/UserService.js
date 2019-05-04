(function () {
    'use strict';

    angular
        .module('recruitApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        // envService.set('development');
        // var loginApiUrl = envService.read('loginApiUrl');
        // var userRegisterApiUrl = envService.read('userRegisterApiUrl');
        // var recruiterRegisterApiUrl = envService.read('recruiterRegisterApiUrl');
        // var userProfileApiUrl = envService.read('userProfileApiUrl');
        var service = {};
        service.GetByUserLoginDetails = GetByUserLoginDetails;
        service.Register = Register;
        service.RegisterRecruiter = RegisterRecruiter;
        service.FacebookAuth = FacebookAuth;
        service.GetUserDetails = GetUserDetails;

        return service;

        function GetByUserLoginDetails(user){
            return $http({
                method:"POST", 
                // url:"https://recruit-apiservices.herokuapp.com/api/login", 
                url:"http://localhost:5000/api/login",
                // url:loginApiUrl,
                data:user,
                headers:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'}
            }).then(handleSuccess,handleError);
            // .then(handleSuccess, handleError("Failed to Login. Try again"));
        }

        function Register(user){
            return $http({
                method:"POST", 
                // url:"https://recruit-apiservices.herokuapp.com/api/register", 
                url:"http://localhost:5000/api/register",
                // url:userRegisterApiUrl,
                data:user,
                headers:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'}
            }).then(handleSuccess,handleError);
            //.success(handleSuccess).error(handleError);
            // .then(handleSuccess, handleError("Error Registration. Try again"));
        }

        function RegisterRecruiter(user){
            return $http({
                method:"POST", 
                // url:"https://recruit-apiservices.herokuapp.com/api/register/recruiter", 
                url:"http://localhost:5000/api/register/recruiter",
                // url:recruiterRegisterApiUrl,
                data:user,
                headers:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'}
            }).then(handleSuccess,handleError);
        }

        function FacebookAuth(){
            return $http({
                method: "GET",
                // url: "https://recruit-apiservices.herokuapp.com/auth/facebook",
                // url: "http://localhost:5000/auth/facebook"
            }).then(handleSuccess, handleError);
        }
        
        function GetUserDetails(){
                return $http({
                    method: "POST",
                    // url: "http://localhost:5000/api/getUserDetails",
                    url: "https://recruit-apiservices.herokuapp.com/api/getUserDetails",
                    // url:userProfileApiUrl,
                }).then(handleSuccess,handleError);
        }

        // private functions
        function handleSuccess(res) {
            return res;
        }

        function handleError(error) {
            return error;
        }
    }

})();