/**
 * Created by julia on 5/27/15.
 */

'use strict';

angular.module('myApp.news', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/news', {
            templateUrl: 'news/news.html',
            controller: 'NewsCtrl'
        });
    }])

    .controller('NewsCtrl', [function () {

    }]);
