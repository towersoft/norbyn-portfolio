//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './app',

        files: [
            'lib/angular.js',
            'lib/angular-route.js',
            'lib/angular-mocks.js',
            'modules/home/*.js',
            'modules/menu/*.js',
            'modules/projects/*.js',
            'modules/skills/*.js',
            'modules/contact/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
