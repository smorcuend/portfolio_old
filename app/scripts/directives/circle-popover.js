'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:circlePopover
 * @description
 * # circlePopover
 */
angular.module('portfolioApp')
    .directive('circlePopover', ['$http', function($http) {
        return {
            name: 'circle-popover',
            templateUrl: 'views/circle-popover.html',
            restrict: 'A',
            transclude: true,
            scope: {},
            link: {
                pre: function preLink($scope, $element, $attrs) {
                    $scope.title = '';
                    $scope.cover = '';
                    $scope.numElems = 0;
                    $scope.angleElem = 0;

                    function _populate() {
                        var elementsCoor = [],
                            ItemPos = function(x, y) {
                                return {
                                    x: x,
                                    y: y
                                };
                            },
                            offsetX = $element[0].clientWidth / 2,
                            offsetY = $element[0].clientHeight / 2;

                        var listAlias = $scope.$parent.skills.front;
                        for (var i = 0; i < listAlias.length; i++) {
                            var item = new ItemPos(
                                Math.cos(i * $scope.angleElem) - offsetY,
                                Math.sin(i * $scope.angleElem) - offsetX
                            );
                            elementsCoor.push(item);
                        }
                        console.log(elementsCoor);

                    }

                    if ($attrs.circlePopoverTitle) {
                        $scope.title = $attrs.circlePopoverTitle;
                    }
                    if ($attrs.circlePopoverIcon && $attrs.circlePopoverIcon !== '#') {
                        $scope.cover = $attrs.circlePopoverIcon;
                    }

                    $scope.angleElem = $scope.$parent.skills.front.length / 360;

                    if ($attrs.circlePopoverData) {

                        $http.get($attrs.circlePopoverData).success(function(data) {
                            $scope.data = data;
                        }).error(function(data) {
                            console.log('http error');
                        });
                        $scope.data = $attrs.circlePopoverData;

                        _populate();

                    }

                },

                post: function postLink($scope, $element, $attrs) {
                    function _resize() {
                        $element.css('height', $element[0].clientWidth + 'px');
                    }
                    angular.element(window).bind('resize', _resize);
                    _resize();
                }
            }

        };
    }]);
