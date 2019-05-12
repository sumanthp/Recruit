(function () {
    'use strict';
  
    angular
        .module('recruitApp')
        .controller('contactController', contactController);
  
        contactController.$inject = ['$location', '$scope', '$state'];
    function contactController($location, $scope, $state) {
        $scope.registrants = ["Student", "Recruiter"];
        //envService.set('development');
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