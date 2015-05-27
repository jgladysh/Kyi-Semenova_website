/**
 * Created by julia on 5/27/15.
 */

'use strict';

angular.module('myApp.services', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/services', {
            templateUrl: 'services/services.html',
            controller: 'ServicesCtrl'
        });
    }])

    .controller('ServicesCtrl', [function () {

    }]);
