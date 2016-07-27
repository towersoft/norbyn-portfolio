'use strict';
define([
    'angular',
    'angularRoute'
], function (angular) {
    angular.module('portfolio.skills', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/skills', {
                templateUrl: 'modules/skills/skills.html',
                controller: 'SkillsCtrl'
            });
        }])
        .controller('SkillsCtrl', [function () {

        }]);
});
