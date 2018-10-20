angular.module('recruitApp.Authentication',[])
    .service('Authentication', ['$rootScope' , '$firebaseAuth',
    function ($rootScope, $firebaseAuth) {
        "use strict";
        var ref = firebase.database().ref();
        var auth = $firebaseAuth();
        return{
             login: function (user) {
                 user.loginMessage="Welcome "+user.email;
             },
            register: function (user) {
                auth.$createUserWithEmailAndPassword(
                    user.email,
                    user.password
                ).then(function (regUser) {
                    $scope.registerMessage="Welcome "+user.email;
                }).catch(function (error) {
                    $scope.registerMessage = error.message;
                });
            }
        };
}]);