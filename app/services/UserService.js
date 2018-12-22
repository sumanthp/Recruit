(function () {
    'use strict';

    angular
        .module('recruitApp')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.GetByUserLoginDetails = GetByUserLoginDetails;
        service.Register = Register;

        return service;

        function GetAll() {
            return $http.get('/api/users').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        function GetByUserLoginDetails(user){
            return $http({
                method:"POST", 
                url:"https://recruit-apiservices.herokuapp.com/api/login", 
                //url:"http://localhost:5000/api/login",
                data:user,
                headers:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'}
            }).then(handleSuccess,handleError);
            // .then(handleSuccess, handleError("Failed to Login. Try again"));
        }

        function Register(user){
            return $http({
                method:"POST", 
                url:"https://recruit-apiservices.herokuapp.com/api/register", 
                //url:"http://localhost:5000/api/register",
                data:user,
                headers:{'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'}
            }).then(handleSuccess,handleError);
            //.success(handleSuccess).error(handleError);
            // .then(handleSuccess, handleError("Error Registration. Try again"));
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