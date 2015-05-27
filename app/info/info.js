/**
 * Created by julia on 5/27/15.
 */

'use strict';

angular.module('myApp.info', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/info', {
            templateUrl: 'info/info.html',
            controller: 'InfoCtrl'
        });
    }])

    .controller('InfoCtrl', [function () {

    }]);
