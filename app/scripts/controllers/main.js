'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
(function() {
    angular.module('portfolioApp').controller('MainCtrl', ['$scope', '$document', '$mdSidenav',

        function($scope, $document, $mdSidenav) {

            var SCROLLTOPLIMIT = 150;
            var SCROLL_DURATION = 800; //milliseconds

            $scope.ui = {};

            //Info
            $scope.alias = 'Sergio Morcuende';
            $scope.slogan = '"Make optimism in your developments"';

            /*AsideNav functions*/
            $scope.asidemenu = [{
                title: 'Go to top',
                action: 'toTheTop()',
                offset: 0,
                href: '#cover'
            }, {
                title: 'Description',
                action: 'navigateToThe()',
                offset: 50,
                href: '#description'
            }, {
                title: 'Skills',
                action: 'navigateToThe()',
                offset: 50,
                href: '#skills'
            }, {
                title: 'Projects',
                action: 'navigateToThe()',
                offset: 50,
                href: '#projects'
            }];

            $scope.toggleSideNav = function() {
                //TODO Add modificator to sidenav button
                $mdSidenav('left').toggle();
            };

            var closeSideNav = function() {
                //TODO Add modificator to sidenav button
                $mdSidenav('left').close();
            };

            $scope.scrollNavigate = function($event) {

                var $el = angular.element(document.querySelector($event.target.hash));

                $document.scrollToElementAnimated($el, 50, SCROLL_DURATION).then(function() {
                    closeSideNav();
                });
            };


            /*Scrolling functions*/

            $scope.isOnTop = function() {
                return $document.scrollTop() < SCROLLTOPLIMIT || false;
            };

            $document.on('scroll', function() {
                if (!$scope.ui.$coverBg) {
                    return false;
                } else if ($scope.isOnTop()) {
                    // $scope.ui.$coverBg.addClass('visible');
                    $scope.ui.$coverContent.addClass('visible');
                    $scope.ui.$coverBg.removeClass('blur');
                    $scope.ui.$toolbar.removeClass('visible');
                    $scope.ui.$coverBg.css('height', window.innerHeight + 'px');
                } else {
                    // $scope.ui.$coverBg.removeClass('visible');
                    $scope.ui.$coverContent.removeClass('visible');
                    $scope.ui.$coverBg.addClass('blur');
                    $scope.ui.$toolbar.addClass('visible');
                    $scope.ui.$coverBg.css('height', window.innerHeight - $scope.ui.$footer[0].clientHeight + 'px');
                }
            });

        }
    ]).config(['$analyticsProvider', function($analyticsProvider) {
        $analyticsProvider.firstPageview(true); /* Records pages that don't use $state or $route */
        $analyticsProvider.withAutoBase(true); /* Records full path */
    }]).config(['resizeProvider', function(resizeProvider) {
        resizeProvider.throttle = 200;
        resizeProvider.initBind = true;
    }]);

})();
