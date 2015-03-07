'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:main
 * @description
 * # main
 */
// (function() {
angular.module('portfolioApp')
    .directive('mainContent', function() {

        return {
            name: 'main-content',
            restrict: 'E',
            templateUrl: 'views/main-content.html',
            link: function postLink($scope) {
                console.log('mainContent directive');

                $scope.ui.$cover = angular.element(document.querySelector('.cover'));
                $scope.ui.$overlay = angular.element(document.querySelector('.overlay'));
                $scope.ui.$coverContent = angular.element(document.querySelector('.cover__content'));

                var coverResize = function() {
                    $scope.ui.$cover.css('height', window.innerHeight + 'px');
                };

                //On init
                coverResize();

                angular.element(window).on('resize', coverResize);

            }

        };
    });
// })();
