'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:GithubInfoCtrl
 * @description
 * # GithubInfoCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
	.controller('GithubInfoCtrl', function ($scope, $http) {

		var GITHUBUSER = 'smorcuend';

		$scope.userNotFound = false;
		$scope.loaded = false;

		$http.get('https://api.github.com/users/' + GITHUBUSER)
			.success(function (data) {
				$scope.user = data;
				$scope.loaded = true;
			})
			.error(function () {
				$scope.userNotFound = true;
			});

		$http.get('https://api.github.com/users/' + GITHUBUSER + '/repos')
			.success(function (data) {
				$scope.repos = data;
				$scope.reposFound = data.length || 0;
			})
			.error(function () {
				$scope.reposFound = 0;
			});

	});