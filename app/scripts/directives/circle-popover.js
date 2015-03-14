'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:circlePopover
 * @description
 * # circlePopover
 */
angular.module('portfolioApp')
    .directive('circlePopover', ['resize', '$http', function(resize, $http) {
        return {
            name: 'circle-popover',
            templateUrl: 'views/circle-popover.html',
            restrict: 'E',
            scope: {},
            link: {
                pre: function preLink($scope, $element, $attrs) {

                    $scope.title = '';
                    $scope.cover = '';

                    var ChildItem = function(id, title, url, svg, x, y) {
                        return {
                            id: id,
                            title: title,
                            url: url,
                            svg: svg,
                            x: x / 16,
                            y: y / 16,
                            w: $attrs.circleChildSize,
                            h: $attrs.circleChildSize
                        };
                    };

                    $scope._populate = function() {

                        if (!$scope.data || $scope.data.length === 0) {
                            return false;
                        }

                        var offsetX = ($element[0].getBoundingClientRect().width / 2) * ($attrs.spacing || 0),
                            offsetY = offsetX,
                            numElems = $scope.data.length,
                            data = $scope.data;

                        var elements = [];

                        for (var i = 0; i < numElems; i++) {

                            var x = (Math.sin((2 * Math.PI * i) / numElems) * offsetX);
                            var y = (Math.cos((2 * Math.PI * i) / numElems) * offsetY);

                            elements.push(new ChildItem(data[i].icon, data[i].name, data[i].url, data[i].svg, x, y));

                        }

                        if ($scope.elements) {
                            $scope.elements.splice(0, numElems);
                            if ($scope.$$phase) {
                                $scope.$apply();
                            }
                        }
                        $scope.elements = elements;

                    };

                    //Fix origin position over .circle-popover__content
                    var elementContent = $element[0].firstChild; //circle-popover__content

                    //@TODO Calculate relative coords dinamicly
                    elementContent.style.top = 1 + $attrs.circleChildSize / 2 + 'em';
                    elementContent.style.left = -4 + $attrs.circleChildSize / 2 + 'em';

                    if ($attrs.circlePopoverTitle) {
                        $scope.title = $attrs.circlePopoverTitle;
                    }
                    if ($attrs.circlePopoverIcon && $attrs.circlePopoverIcon !== '#') {
                        $scope.cover = $attrs.circlePopoverIcon;
                    }

                    if ($attrs.circlePopoverData) {

                        $http.get($attrs.circlePopoverData).success(function(data) {
                            $scope.data = data;
                            $scope._populate();
                        }).error(function(data) {
                            console.log('http error', data);
                        });

                    } else {
                        console.log('Error on loading data');
                    }

                },

                post: function postLink($scope, $element) {
                    function _resize() {
                        $element.css('height', $element[0].clientWidth / 16 + 'rem');
                        $scope._populate();
                    }

                    $scope.$on('resize', function() {
                        _resize();
                    });

                    _resize();

                }
            }

        };

    }]);
