'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
// (function() {
angular.module('portfolioApp')
    .controller('MainCtrl', ['$scope', '$document', '$mdSidenav',

        function($scope, $document, $mdSidenav) {

            var SCROLLTOPLIMIT = 180;
            var SCROLL_DURATION = 800; //milliseconds

            $scope.ui = {};

            $scope.coverContent = {
                title: 'Sergio Morcuende',
                slogan: '"Make optimism in your developments"'
            };

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
                if (!$scope.ui.$overlay) {
                    return false;
                } else if ($scope.isOnTop()) {
                    $scope.ui.$overlay.addClass('visible');
                    $scope.ui.$coverContent.addClass('visible');
                    $scope.ui.$cover.removeClass('blur');
                    $scope.ui.$toolbar.removeClass('visible');
                } else {
                    $scope.ui.$overlay.removeClass('visible');
                    $scope.ui.$coverContent.removeClass('visible');
                    $scope.ui.$cover.addClass('blur');
                    $scope.ui.$toolbar.addClass('visible');
                }
            });

        }
    ]).config(['AnalyticsProvider', function(AnalyticsProvider) {
        // initial configuration
        AnalyticsProvider.setAccount('UA-31122385-2');
        // using multiple tracking objects (analytics.js only)
        // AnalyticsProvider.setAccount([
        //   { tracker: 'UA-12345-12', name: "tracker1" },
        //   { tracker: 'UA-12345-34', name: "tracker2" }
        // ]);

        // track all routes (or not)
        // AnalyticsProvider.trackPages(true);

        // track all url query params (default is false)
        // AnalyticsProvider.trackUrlParams(true);

        // Optional set domain (Use 'none' for testing on localhost)
        // AnalyticsProvider.setDomainName('XXX');

        // Use display features plugin
        // AnalyticsProvider.useDisplayFeatures(true);

        // url prefix (default is empty)
        // - for example: when an app doesn't run in the root directory
        AnalyticsProvider.trackPrefix('portfolio');

        // Use analytics.js instead of ga.js
        AnalyticsProvider.useAnalytics(true);

        // Use cross domain linking
        // AnalyticsProvider.useCrossDomainLinker(true);
        // AnalyticsProvider.setCrossLinkDomains(['domain-1.com', 'domain-2.com']);

        // Ignore first page view... helpful when using hashes and whenever your bounce rate looks obscenely low.
        AnalyticsProvider.ignoreFirstPageLoad(true);

        // Enabled eCommerce module for analytics.js(uses legacy ecommerce plugin)
        // AnalyticsProvider.useECommerce(true, false);

        // Enabled eCommerce module for analytics.js(uses ec plugin instead of ecommerce plugin)
        // AnalyticsProvider.useECommerce(true, true);

        // Enable enhanced link attribution
        // AnalyticsProvider.useEnhancedLinkAttribution(true);

        // Enable analytics.js experiments
        // AnalyticsProvider.setExperimentId('12345');

        // Set custom cookie parameters for analytics.js
        // AnalyticsProvider.setCookieConfig({
        //     cookieDomain: 'foo.example.com',
        //     cookieName: 'myNewName',
        //     cookieExpires: 20000
        // });


        // change page event name
        // AnalyticsProvider.setPageEvent('$stateChangeSuccess');


        // Delay script tage creation
        // must manually call Analytics.createScriptTag(cookieConfig) or Analytics.createAnalyticsScriptTag(cookieConfig)
        // AnalyticsProvider.delayScriptTag(true);
    }]);

// })();
