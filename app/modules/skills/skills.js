'use strict';
define([
    'angular',
    'endpoint',
    'angularRoute'
], function (angular, endpoint) {
    angular.module('portfolio.skills', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/skills', {
                templateUrl: 'modules/skills/skills.html',
                controller: 'SkillsCtrl',
                controllerAs: 'skill'
            });
        }])
        .controller('SkillsCtrl', ['$http', function ($http) {
            var skill = this;
            skill.skills = [];
            $http.get(endpoint.skills.url)
                .success(function (data) {
                    skill.skills = data;
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });

            skill.addSkill = function () {
                $http.post(endpoint.skills.post.url, JSON.stringify({
                    "description": "El hacker",
                    "level": 10
                }))
                    .success(function (data) {
                        console.log('post: ', data);
                    })
                    .error(function (data) {
                        console.log('Error: ' + data);
                    });
            }
        }]);
});
