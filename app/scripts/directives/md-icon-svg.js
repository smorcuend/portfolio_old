'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:mdIcon2
 * @description
 * # mdIcon2
 */
(function() {
    angular.module('portfolioApp').directive('mdIconSvg', function() {
        return {
            name: 'md-icon-svg',
            template: '<svg class="icon" role="img" title="{{title}}"><use xlink:href="#"/></svg>',
            restrict: 'E',
            scope: {},
            link: function preLink($scope, $element, $attrs) {
                $scope.title = $attrs.title || $attrs.iconSprite;
                if (!$attrs.fallbackPng || ($attrs.fallbackPng === 'false')) {
                    var inlineSvg = $element[0].firstChild.firstChild;
                    inlineSvg.setAttribute('xlink:href', '#' + $attrs.iconSprite);
                } else {
                    $element.html('<img class="icon" src="images/tools_icons/' + $scope.title + '.png" title="' + $scope.title + '"></div>');
                    // $element.html('<div class="md-icon md-icon-fb icon-' + $attrs.iconSprite + '" title="' + $scope.title + '"></div>');
                }
            }
        };
    });
})();
