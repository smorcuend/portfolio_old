'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:socialBar
 * @description
 * # socialBar
 */
angular.module('portfolioApp')
    .directive('socialBar', function() {
        return {
            name: 'social-bar',
            templateUrl: 'views/social-bar.html',
            restrict: 'E',
            scope: {},
            controller: ['$scope', '$attrs', function($scope, $attrs) {

                $scope.layoutAlign = $attrs.layoutalign;

                $scope.socialiconbar = [{
                    name: 'GitHub',
                    iconid: 'github',
                    href: 'https://github.com/smorcuend'
                }, {
                    name: 'Twitter',
                    iconid: 'twitter',
                    href: 'https://twitter.com/smorcuend'
                }, {
                    name: 'Bitbucket',
                    iconid: 'bitbucket',
                    href: 'https://bitbucket.org/smorcuend'
                }, {
                    name: 'Linkedin',
                    iconid: 'linkedin',
                    href: 'https://es.linkedin.com/pub/sergio-morcuende/64/282/6b6'
                }];

            }],
            link: function postLink() {
                console.log('social-bar directive');
            }
        };
    });
