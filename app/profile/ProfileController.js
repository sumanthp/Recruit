(function () {
    'use strict';

    angular
        .module('recruitApp')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$state', 'AuthenticationService', '$scope', 'AuthToken'];
    function ProfileController($state, AuthenticationService, $scope, AuthToken) {
        $scope.info={};
        $scope.info.token='';
        $scope.registrants = ["Student", "Recruiter"];
        var vm = this;
        getProfileDetails();
        $scope.content={about:"technically skilled to problem solving", skills:"html, css, java, unix, ml", roles:"software engineer1"};
        $scope.editProfile = edit;
        function edit()
        {
            $state.go('editProfile');
        }
        function getProfileDetails(){
            $scope.info.token = AuthToken.getToken();
            console.log("Token:");
            console.log($scope.info.token);
            if($scope.info.token!=null && $scope.info.token!=''){
                AuthenticationService.GetProfileDetails($scope.info, function(response){
                    if(response.success){
                        console.log("Profile Response:")
                        console.log(response.data.message);
                        var user = response.data.message;;
                        $scope.user = {name:user[0].FirstName, isJob:"false", option:"yes", designation:"", email:user[0].Email, bio:"", contact:user[0].Contact, college:""};
                    }
                });
            }
        }
    }

})();