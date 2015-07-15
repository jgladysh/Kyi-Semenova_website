/**
 * Created by julia on 5/30/15.
 */


'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    .controller('HomeCtrl', ['$scope', function ($scope) {
        $('.area')[0].fill = 'green';
        $scope.play = function play() {
            $('.arrow')[0].style.visibility = 'hidden';
            document.getElementById('vidwrap')
                .innerHTML = '<iframe id="video" src="https://www.youtube.com/embed/54XztbNJ87g?rel=0&modestbranding=1&autohide=1&showinfo=0&theme=light&fs=0&color=white&autoplay=1" frameborder="0" allowfullscreen></iframe>';
        }
    }]);
