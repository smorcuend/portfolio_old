'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:mainFooter
 * @description
 * # mainFooter
 */
// (function () {
angular.module('portfolioApp')
    .directive('mainFooter', function() {
        return {
            name: 'main-footer',
            templateUrl: 'views/main-footer.html',
            restrict: 'E',
            link: function postLink($scope) {
                console.log('mainFooter directive');
                $scope.ui.$footer = angular.element(document.querySelector('.container__footer'));
            }
        };
    });
// })();
