angular.module('recruitApp.Authentication',[])
    .factory('Authentication', ['$rootScope' , '$firebaseAuth',
    function ($rootScope, $firebaseAuth) {
        "use strict";
        var config = {
            apiKey: "AIzaSyD-ntzQCkESWnRBQRXIRx5y3xO-k2Yqouw",
            authDomain: "recruit-5fa61.firebaseapp.com",
            databaseURL: "https://recruit-5fa61.firebaseio.com",
            projectId: "recruit-5fa61",
            storageBucket: "recruit-5fa61.appspot.com",
            messagingSenderId: "837643129452"
        };
        firebase.initializeApp(config);
        var ref = firebase.database().ref();
        //var authref = new Firebase("https://recruit-5fa61.firebaseio.com");
        var auth = $firebaseAuth(firebase.auth());
        return{
             login: function (user) {
                 auth.$signInWithEmailAndPassword(
                     user.email,
                     user.password
                 ).then(function (exstngUser) {
                     $rootScope.loginMessage="Welcome "+user.email;
                 }).catch(function(error){
                     $rootScope.loginMessage = error.message;
                 });
             },
            facebookLogin : function(){
                var provider = new firebase.auth.FacebookAuthProvider();
                auth.$signInWithPopup(
                    provider
                ).then(function(authData){
                    $rootScope.loginMessage = "Welcome "+ authData.displayName;
                }).catch(function(error){
                        $rootScope.loginMessage = error.message;
                });
            },
            linkedinLogin : function(){

            },
            googleLogin : function(){
                 var provider = new firebase.auth.GoogleAuthProvider();
                auth.$signInWithPopup(
                    provider
                ).then(function(authData){
                    console.log("Google Auth Response ", authData.user);
                    $rootScope.loginMessage = "Welcome "+ authData.user.email;
                }).catch(function(error){
                    $rootScope.loginMessage = error.message;
                });
            },
            register: function (user) {
                auth.$createUserWithEmailAndPassword(
                    user.email,
                    user.password
                ).then(function (regUser) {
                    $rootScope.registerMessage="Welcome "+user.email;
                }).catch(function (error) {
                    $rootScope.registerMessage = error.message;
                });
            },
            forgotpassword: function(user){
                 auth.$sendPasswordResetEmail(
                     user.email
                 ).then(function(resData){
                    $rootScope.message = "Reset Password link sent to "+user.email + "Check your email to reset password";
                 }).catch(function(error){
                     $rootScope.resetPasswordMessage = error.message;
                });
            },
            signout: function (user) {

            }
        };
}]);