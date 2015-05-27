/**
 * Created by julia on 5/27/15.
 */

'use strict';

angular.module('myApp.contacts', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contacts', {
            templateUrl: 'contacts/contacts.html',
            controller: 'ContactsCtrl'
        });
    }])

    .controller('ContactsCtrl', [function () {

    }]);
