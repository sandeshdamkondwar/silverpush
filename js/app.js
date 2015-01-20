/**
 * SPWebApp Module
 *
 * Description
 */
var app = angular.module('SPWebApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/view_home.html',
        })
        .when('/home', {
            templateUrl: 'views/view_home.html',
        })
        .when('/team', {
            templateUrl: 'views/view_team.html',
        })
        .when('/tech', {
            templateUrl: 'views/view_tech.html',
        })
        .when('/company', {
            templateUrl: 'views/view_company.html',
        })
        .when('/contactus', {
            templateUrl: 'views/view_contactus.html',
        })
        .when('/investors', {
            templateUrl: 'views/view_investors.html',
        })
        .when('/career', {
            templateUrl: 'views/view_career.html',
        })
        .when('/analytics', {
            templateUrl: 'views/view_analytics.html',
        })
        .when('/targeting', {
            templateUrl: 'views/view_targeting.html',
        })
        .when('/measurement', {
            templateUrl: 'views/view_measurement.html',
        })
         .when('/beacon', {
            templateUrl: 'views/view_beacon.html',
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

//Setting HTML5 Location Mode
app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);
