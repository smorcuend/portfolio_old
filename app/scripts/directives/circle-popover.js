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
            scope: {},
            link: {
                pre: function preLink($scope, $element, $attrs) {

                    $scope.title = '';
                    $scope.cover = '';

                    $scope._populate = function(data) {

                        if (!data && !$scope.data) {
                            return false;
                        }

                        var elementsCoor = [],
                            ItemPos = function(id, title, svg, x, y) {
                                return {
                                    id: id,
                                    title: title,
                                    svg: svg,
                                    x: x / 16,
                                    y: y / 16
                                };
                            },
                            offsetX = ($element[0].clientWidth / 2),
                            offsetY = offsetX,
                            numElems = 0;

                        numElems = (Math.PI * 2) / data.length;

                        for (var i = 0; i < data.length; i++) {

                            var x = (Math.sin((2 * Math.PI * i) / numElems) * offsetX); // + offsetX;
                            var y = (Math.cos((2 * Math.PI * i) / numElems) * offsetY) + offsetY / 3;
                            var item = new ItemPos(data[i].icon, data[i].name, data[i].svg, x, y);

                            elementsCoor.push(item);

                        }

                        return elementsCoor;

                    };

                    //Fix origin position over .circle-popover__content
                    $element.children()[0].style.top = '-3rem';
                    $element.children()[0].style.left = '-3rem';

                    if ($attrs.circlePopoverTitle) {
                        $scope.title = $attrs.circlePopoverTitle;
                    }
                    if ($attrs.circlePopoverIcon && $attrs.circlePopoverIcon !== '#') {
                        $scope.cover = $attrs.circlePopoverIcon;
                    }

                    if ($attrs.circlePopoverData) {

                        $http.get($attrs.circlePopoverData).success(function(data) {
                            $scope.data = data;
                            $scope.elements = $scope._populate(data);
                        }).error(function(data) {
                            console.log('http error', data);
                        });

                    }

                },

                post: function postLink($scope, $element) {
                    function _resize() {
                        $element.css('height', Math.round($element[0].clientWidth / 16) + 'rem');
                        $scope.elements = $scope._populate($scope.data);

                    }
                    angular.element(window).on('resize', _resize);
                    _resize();
                }
            }

        };

    }]);
