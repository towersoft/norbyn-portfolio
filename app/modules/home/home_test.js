'use strict';

describe('portfolio.home module', function () {

    beforeEach(module('portfolio.config'));
    beforeEach(module('portfolio.home'));

    describe('home controller', function () {

        it('should ....', inject(function ($controller) {
            //spec body
            var homeCtrl = $controller('HomeCtrl');
            expect(homeCtrl).toBeDefined();
        }));

    });
});