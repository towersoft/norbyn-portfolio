'use strict';

angular.module('portfolio.skills', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/skills', {
            templateUrl: 'modules/skills/skills.html',
            controller: 'SkillsCtrl',
            controllerAs: 'vm'
        });
    }])

    .controller('SkillsCtrl', [function () {
        var vm = this;
        vm.something = "New skill";
        vm.addSkill = function () {
            alert("adding...");
        }
    }]);