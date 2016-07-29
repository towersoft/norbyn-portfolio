'use strict';

angular.module('portfolio.skills', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/skills', {
            templateUrl: 'modules/skills/skills.html',
            controller: 'SkillsCtrl',
            controllerAs: 'vm'
        });
    }])
    .controller('SkillsCtrl', ['$http', function ($http) {
        var vm = this;
        vm.skills = [];
        vm.buttonName = "New skill";
        vm.loadAll = function () {
            $http.get('http://localhost:8001/skills')
                .success(function (data) {
                    vm.skills = data;
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };

        vm.addSkill = function () {
            $http.post('http://localhost:8001/skills', JSON.stringify({
                "description": "Socket IO",
                "level": 10
            }))
                .success(function (data) {
                    console.log('post: ', data);
                    vm.loadAll();
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };

        vm.deleteSkill = function (id) {
            $http.delete('http://localhost:8001/skills/' + id)
                .success(function (data) {
                    console.log('delete: ', data);
                    vm.loadAll();
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }
    }]);