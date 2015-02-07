'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:githubInfo
 * @description
 * # githubInfo
 */
angular.module('portfolioApp')
    .directive('githubInfo', function() {
        return {
            name: 'github-info',
            templateUrl: 'views/github-info.html',
            restrict: 'E',
            scope: {},
            controller: function($scope, $http, $attrs, $localStorage) {

                $scope.userNotFound = false;
                $scope.loaded = false;
                $scope.langFilter = $attrs.language || '';
                $scope.forkFilter = $attrs.showFork || false;

                var githubQuery = 'https://api.github.com/';
                var githubUser = $attrs.user || null;
                var elementId = 'githubInfo-' + $attrs.id;
                var expirationTime = 7200; //seconds

                var getData = function() {

                    $http.get(githubQuery).success(function(data) {
                        if (data.length > 0) {
                            $localStorage[elementId] = data;
                            $scope.items = data;
                            $scope.itemsFound = data.length || 0;
                        } else {
                            $scope.itemsFound = 0;
                        }
                    }).error(function() {
                        $scope.errorMsg = 'Error to load Github repository info';
                    });

                };

                //Building url path
                if ($attrs.type === 'contributions' && $attrs.org) {
                    githubQuery += 'orgs/' + $attrs.org + '/repos';
                } else if ($attrs.type === 'repositories') {
                    githubQuery += 'users/' + githubUser + '/repos';
                }

                if (!$localStorage[elementId]) {

                    getData();
                    $localStorage[elementId + '_expires'] = new Date().getTime() + (expirationTime * 1000);

                } else {

                    if (new Date().getTime() > $localStorage[elementId + '_expires']) {
                        $localStorage[elementId + '_expires'] = new Date().getTime() + (expirationTime * 1000);
                        getData();
                    } else {
                        $scope.items = $localStorage[elementId];
                        $scope.itemsFound = $localStorage[elementId].length;
                    }

                }

            },
            link: function postLink() {
                console.log('github-info directive');
            }
        };
    });
