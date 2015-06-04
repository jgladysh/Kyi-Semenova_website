/**
 * Created by julia on 6/4/15.
 */

'use strict';

angular.module('myApp.translation', ['ngRoute'])

    .controller('translationController', ['$scope', 'translationService',
        function ($scope, translationService) {
            //Init
            var lang = 'ru';

            //Run translation if selected language changes
            $scope.translate = function () {
                if (event.target.value != undefined) {
                    lang = event.target.value;
                }
                translationService.getTranslation($scope, lang);
            };
            $scope.translate();

        }])

    .service('translationService', function ($resource) {

        this.getTranslation = function ($scope, language) {
            var languageFilePath = 'translation/translation_' + language + '.json';
            console.log(languageFilePath);
            $resource(languageFilePath).get(function (data) {
                $scope.translation = data;
            });
        };
    });