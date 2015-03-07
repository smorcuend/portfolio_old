'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:mdIcon2
 * @description
 * # mdIcon2
 */
angular.module('portfolioApp')
    .directive('mdIconSvg', function() {
        return {
            name: 'md-icon-svg',
            template: '<svg class="md-icon" role="img"><use xlink:href="#"/></svg>',
            restrict: 'E',
            scope: {},
            link: function preLink($scope, $element, $attrs) {
                if (!$attrs.fallbackPng || ($attrs.fallbackPng === 'false')) {
                    var inlineSvg = $element[0].firstChild.firstChild;
                    inlineSvg.setAttribute('xlink:href', '#' + $attrs.iconSprite);
                } else {
                    $element.html('<img src="/images/tools_icons/' + $attrs.iconSprite + '.png" alt="" title="" class="md-icon" />');
                }
                if ($attrs.title) {
                    $element[0].firstChild.setAttribute('title', $attrs.title);
                } else {
                    $element[0].firstChild.setAttribute('title', $attrs.iconSprite);
                }
            }
        };
    });
