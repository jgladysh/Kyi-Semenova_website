'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.info',
    'myApp.contacts',
    'myApp.news',
    'myApp.services',
    'myApp.home',
    'myApp.apartments'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
