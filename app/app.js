/**
 * SPWebApp Module
 *
 * Description
 */

 define(['services/routeResolver'], function () {
    "use strict";

    var app = angular.module('SPWebApp', ['ngRoute', 'ngAnimate', 'routeResolverServices']);

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$provide', '$locationProvider',
        function ($routeProvider, routeResolverProvider, $controllerProvider, $provide, $locationProvider) {
            app.register = {
                controller: $controllerProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            //Define routes - controllers will be loaded dynamically
            var route = routeResolverProvider.route;

            $routeProvider.when('/', route.resolve("home", "", 'vm'))
                .when('/home', route.resolve("home", "", 'vm'))
                .when('/team', route.resolve("team", "", 'vm'))
                .when('/tech', route.resolve("tech", "", 'vm'))
                .when('/company', route.resolve("company", "", 'vm'))
                .when('/contactus', route.resolve("contactus", "", 'vm'))
                .when('/investors', route.resolve("investors", "", 'vm'))
                .when('/career', route.resolve("career", "", 'vm'))
                .when('/analytics', route.resolve("analytics", "", 'vm'))
                .when('/targeting', route.resolve("targeting", "", 'vm'))
                .when('/measurement', route.resolve("measurement", "", 'vm'))
                .when('/beacon', route.resolve("beacon", "", 'vm'))
                .otherwise({
                    redirectTo: '/'
                });

            $locationProvider.hashPrefix('!');
        }
    ]);

    app.run(['$rootScope', '$location', function ($rootScope, $location) {
        console.log($rootScope, $location);
    }]);

    return app;
});