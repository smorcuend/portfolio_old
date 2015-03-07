'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:mainToolbar
 * @description
 * # mainToolbar
 */
// (function () {
angular.module('portfolioApp')
    .directive('mainToolbar', function() {
        return {
            name: 'main-toolbar',
            templateUrl: 'views/main-toolbar.html',
            restrict: 'E',

            link: function postLink($scope, $el) {
                console.log('mainToolbar directive');
                $scope.ui.$toolbar = $el.children();
            }
        };
    });
// })();
