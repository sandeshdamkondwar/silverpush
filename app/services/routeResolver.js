define([], function () {
    'use strict';

    var routeResolver = function () {

        this.$get = function () {
            return this;
        };

        this.routeConfig = function () {
            var componentsDirectory = 'app/component/',

            setComponentsDirectory = function (componentsDir) {
                componentsDirectory = componentsDir;
            },

            getComponentsDirectory = function () {
                return componentsDirectory;
            };

            return {
                getComponentsDirectory: getComponentsDirectory,
                setComponentsDirectory: setComponentsDirectory
            };
        }();

        this.route = function (routeConfig) {

            var resolve = function (baseName, path, controllerAs, secure) {
                if (!path) path = '';

                var routeDef = {};
                var baseFileName = baseName.charAt(0).toLowerCase() + baseName.substr(1);
                if (baseFileName === "") baseFileName = "home";
                routeDef.templateUrl = routeConfig.getComponentsDirectory() + path + baseFileName + '.html';
                routeDef.controller = baseName + 'Controller';
                if (controllerAs) routeDef.controllerAs = controllerAs;
                routeDef.secure = (secure) ? secure : false;
                routeDef.resolve = {
                    load: ['$q', '$rootScope', function ($q, $rootScope) {
                        var dependencies = [routeConfig.getComponentsDirectory() + path + baseFileName + 'Controller.js'];
                        return resolveDependencies($q, $rootScope, dependencies);
                    }]
                };

                return routeDef;
            },

            resolveDependencies = function ($q, $rootScope, dependencies) {
                var defer = $q.defer();
                require(dependencies, function () {
                    defer.resolve();
                    $rootScope.$apply();
                });

                return defer.promise;
            };

            return {
                resolve: resolve
            };
        }(this.routeConfig);

    };

    var servicesApp = angular.module('routeResolverServices', []);

    //Must be a provider since it will be injected into module.config()
    servicesApp.provider('routeResolver', routeResolver);
});