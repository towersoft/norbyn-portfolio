'use strict';

angular.module('portfolio.constants', [])

    .constant('config', {
        apiUrl: 'http://localhost:8001',
        baseUrl: '/'
    }).constant('shortcuts', {
        addSkill: 'alt+s'
    }).run(function ($rootScope, shortcuts) {
        $rootScope.shortcuts = shortcuts;
    });