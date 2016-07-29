'use strict';

angular.module('portfolio.menu', [])

    .controller('MenuCtrl', MenuCtrl);

function MenuCtrl() {

    //Saving the this reference
    var mc = this;

    //Adding a property to the Controller instance
    mc.title = 'Norbyn Leyva';

    mc.menu = [
        {"href": "home", "value": "Home page"},
        {"href": "projects", "value": "Projects"},
        {"href": "skills", "value": "Skills"},
        {"href": "contact", "value": "Contact"}];
}