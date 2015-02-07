'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the portfolioApp
 */
(function() {
    angular.module('portfolioApp')
        .controller('SkillsCtrl', ['$scope',

            function($scope) {

                $scope.skills = {
                    front: [{
                        name: 'Backbone',
                        svg: true,
                        icon: 'backbone'
                    }, {
                        name: 'Marionette',
                        svg: true,
                        icon: 'marionette'
                    }, {
                        name: 'AngularJS',
                        svg: true,
                        icon: 'angularjs'
                    }, {
                        name: 'HydraJS',
                        svg: false,
                        icon: 'hydrajs'
                    }, {
                        name: 'coreJS',
                        svg: false,
                        icon: 'corejs'
                    }, {
                        name: 'kiUI',
                        svg: true,
                        icon: 'kiui'
                    }, {
                        name: 'RequireJS',
                        svg: false,
                        icon: 'requirejs'
                    }, {
                        name: 'Web Components',
                        svg: false,
                        icon: 'webcomponents'
                    }, {
                        name: 'Polymer project',
                        svg: true,
                        icon: 'polymer'
                    }, {
                        name: 'jQuery',
                        svg: true,
                        icon: 'jquery'
                    }, {
                        name: 'SVG',
                        svg: true,
                        icon: 'svg'
                    }, {
                        name: 'Bootstrap',
                        svg: false,
                        icon: 'bootstrap'
                    }, {
                        name: 'Less',
                        svg: false,
                        icon: 'less'
                    }],
                    back: [{
                        name: 'Ubuntu Gnome',
                        svg: false,
                        icon: 'ubuntu'
                    }, {
                        name: 'Sublime Text',
                        svg: true,
                        icon: 'sublime'
                    }, {
                        name: 'NodeJS',
                        svg: true,
                        icon: 'nodejs'
                    }, {
                        name: 'Git',
                        svg: false,
                        icon: 'git'
                    }, {
                        name: 'npm',
                        svg: true,
                        icon: 'npm'
                    }, {
                        name: 'Grunt',
                        svg: true,
                        icon: 'grunt'
                    }, {
                        name: 'Yeoman',
                        svg: false,
                        icon: 'yeoman'
                    }, {
                        name: 'Bower',
                        svg: false,
                        icon: 'bower'
                    }, {
                        name: 'Handlebars',
                        svg: true,
                        icon: 'handlebars'
                    }, {
                        name: 'Jade',
                        svg: false,
                        icon: 'jade'
                    }, {
                        name: 'Sass',
                        svg: false,
                        icon: 'sass'
                    }, {
                        name: 'Compass',
                        svg: false,
                        icon: 'compass'
                    }, {
                        name: 'Chrome DevTools',
                        svg: false,
                        icon: 'chrome'
                    }, {
                        name: 'Jenkins',
                        svg: false,
                        icon: 'jenkins'
                    }],
                    others: [{
                        name: 'Mean.io',
                        svg: false,
                        icon: 'mean'
                    }, {
                        name: 'Wordpress',
                        svg: true,
                        icon: 'wordpress'
                    }, {
                        name: 'CakePHP',
                        svg: false,
                        icon: 'cakephp'
                    }, {
                        name: 'MariaDB',
                        svg: false,
                        icon: 'mariadb'
                    }, {
                        name: 'nginx',
                        svg: false,
                        icon: 'nginx'
                    }, {
                        name: 'debian',
                        svg: false,
                        icon: 'debian'
                    }, {
                        name: 'raspberry',
                        svg: false,
                        icon: 'raspberry'
                    }, {
                        name: 'arduino',
                        svg: false,
                        icon: 'arduino'
                    }]
                };

                // $http.get('/chart-data.json').success(function(data) {
                //     console.log($scope);
                // });

            }
        ]);

})();
