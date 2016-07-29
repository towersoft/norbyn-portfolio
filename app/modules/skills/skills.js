'use strict';

angular.module('portfolio.skills', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/skills', {
            templateUrl: 'modules/skills/skills.html',
            controller: 'SkillsCtrl',
            controllerAs: 'vm'
        });
    }])
    .controller('SkillsCtrl', ['$http', 'config', function ($http, config) {
        var vm = this;
        vm.skills = [];
        vm.buttonName = "New skill";
        vm.source = "img/icons/add.png";
        vm.loadAll = function () {
            $http.get(config.apiUrl + '/skills')
                .success(function (data) {
                    vm.skills = data;
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };

        vm.addSkill = function () {
            $http.post('http://localhost:8001/skills', JSON.stringify({
                "description": vm.description,
                "level": vm.level
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