'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.translation',
    'myApp.info',
    'myApp.contacts',
    'myApp.news',
    'myApp.services',
    'myApp.home',
    'myApp.apartments'
]).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {


        $routeProvider.otherwise({redirectTo: '/home'});

        $locationProvider.html5Mode(true);

    }]);
