/**
 * Created by ArthurWANG on 14/10/27.
 */
'use strict';

define(['routeConfig'], function (routes) {

    var app = angular.module('app',['ngRoute']);

    app.config([
        '$routeProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        function ($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;

            angular.forEach(routes.routes, function (route, path) {
                $routeProvider.when(path, {
                    templateUrl: route.templateUrl,
                    resolve: resolveController(route.dependencies),
                    controller: route.controller
                });
            });
            if (routes.defaultRoutePaths !== undefined) {
                $routeProvider.otherwise({
                    redirectTo: routes.routes.defaultRoutePaths
                });
            }

            //解析控制器方法
            function resolveController(names) {
                return {
                    load: ['$q', '$rootScope', function ($q, $rootScope) {
                        var defer = $q.defer();
                        require(names, function () {
                            $rootScope.$apply(function () {
                                defer.resolve();
                            });
                        });
                        return defer.promise;
                    }]
                }
            }

        }
    ]);

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });

    return app;
});