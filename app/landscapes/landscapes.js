/**
 * Created by julia on 7/27/15.
 */


'use strict';

angular.module('myApp.landscapes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/landscapes', {
            templateUrl: 'landscapes/landscapes.html',
            controller: 'LandscapesCtrl'
        });
    }])

    .controller('LandscapesCtrl', function ($scope) {

        $scope.submit = function () {

            var user = "",
                site = "gmail.com",
                email = $('#email').val();

            var arr = decodeURIComponent(jQuery.param($('#form').serializeArray()).replace(new RegExp("&", 'g'), "<br/>").replace(new RegExp("=", 'g'), " ")).replace(/\+/g, ' ');

            var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
            xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
            xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) alert('Mail sended!');
                    else if (xmlhttp.status == 500) alert('Check apikey');
                    else alert('Request error');
                }
            };
            xmlhttp.send(JSON.stringify({
                'key': 'ex_Vs1Z8xGkbDgpmIpkNlQ',
                'message': {
                    'from_email': email,
                    'to': [{'email': user + '@' + site, 'type': 'to'}],
                    'autotext': 'true',
                    'subject': 'Website questionnaire (landscapes)',
                    'html': arr
                }
            }));
        }
    });

