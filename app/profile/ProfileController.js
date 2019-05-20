(function () {
    'use strict';

    angular
        .module('recruitApp')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$state', 'AuthenticationService', '$scope', 'angularFileUpload'];
    function ProfileController($state, AuthenticationService, $scope, FileUploader) {
        $scope.registrants = ["Student", "Recruiter"];
        var vm = this;
        $scope.user = {name:"hemanth", isJob:"true", option:"yes", designation:"student", email:"hemanthss333@gmail.com", bio:"technology Enthusiast", contact:"9738213033", college:"PESIT"};
        $scope.content={about:"technically skilled to problem solving", skills:"html, css, java, unix, ml", roles:"software engineer1"};
        $scope.editProfile = edit;
        function edit()
        {
            $state.go('editProfile');
        }
    }

})();