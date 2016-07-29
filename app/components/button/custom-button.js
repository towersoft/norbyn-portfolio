'use strict';

angular.module('portfolio.button', [])

    .directive('customButton', [function () {
        return {
            restrict: 'E',
            scope: {
                description: "@",
                action: "&"
            },
            templateUrl: 'components/button/custom-button.html'
        }
    }]);

