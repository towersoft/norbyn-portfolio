'use strict';

require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        angularRoute: '../bower_components/angular-route/angular-route',
        angularMocks: '../bower_components/angular-mocks/angular-mocks',
        text: '../bower_components/requirejs-text/text',
        endpoint: './endpoint',
        app: '../app',
        'modules': '../modules',
        'components': '../components'
    },
    shim: {
        'angular': {'exports': 'angular'},
        'angularRoute': ['angular'],
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        }
    },
    priority: [
        "angular"
    ]
});

require([
        'angular',
        'app'
    ], function () {
    }
);