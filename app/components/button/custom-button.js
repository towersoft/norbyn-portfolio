'use strict';

angular.module('portfolio.button', [])

    .directive('customButton', [function () {
        return {
            restrict: 'E',
            scope: {
                src: "=",
                description: "=",
                action: "&"
            },
            templateUrl: 'components/button/custom-button.html',
            link: function (scope, element, attrs) {
            }
        }
    }]);

