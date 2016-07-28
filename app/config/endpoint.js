'use strict';
var BASE_URL = 'http://localhost:8001';
define({
    projects: {
        url: BASE_URL + '/projects'
    },
    skills: {
        url: BASE_URL + '/skills?_sort=level&_order=DESC',
        post: {url: BASE_URL + '/skills'}
    },
    contacts: {
        url: BASE_URL + '/contacts'
    },
    portfolio: {
        url: BASE_URL + '/portfolio'
    }
});