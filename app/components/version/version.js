'use strict';
define([
    'angular',
    './interpolate-filter',
    './version-directive'
], function (angular) {
    angular.module('portfolio.version', ['portfolio.version.interpolate-filter',
        'portfolio.version.version-directive'])
        .value('version', '0.0.1');
});
