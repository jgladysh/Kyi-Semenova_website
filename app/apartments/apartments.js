/**
 * Created by julia on 5/31/15.
 */

'use strict';

angular.module('myApp.apartments', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/apartments', {
            templateUrl: 'apartments/apartments.html',
            controller: 'ApartmentsCtrl'
        });
    }])

    .controller('ApartmentsCtrl', function ($scope) {

        $("#email").blur(function () {
            if (!validateEmail(email)) {
                $('#email')[0].setCustomValidity('Please enter a valid eMail address');
                return false;
            }
        });

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
                    'subject': 'Website questionnaire',
                    'html': arr
                }
            }));
        }
    });


function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}