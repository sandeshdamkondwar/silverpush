/**
 * SPWebApp Module
 *
 * Description
 */
var app = angular.module('SPWebApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
        })
        .when('/home', {
            templateUrl: 'views/home.html',
        })
        .when('/team', {
            templateUrl: 'views/team.html',
        })
        .when('/tech', {
            templateUrl: 'views/tech.html',
        })
        .when('/company', {
            templateUrl: 'views/company.html',
        })
        .when('/contactus', {
            templateUrl: 'views/contactus.html',
        })
        .when('/investors', {
            templateUrl: 'views/investors.html',
        })
        .when('/career', {
            templateUrl: 'views/career.html',
        })
        .when('/analytics', {
            templateUrl: 'views/analytics.html',
        })
        .when('/targeting', {
            templateUrl: 'views/targeting.html',
        })
        .when('/measurement', {
            templateUrl: 'views/measurement.html',
        })
         .when('/beacon', {
            templateUrl: 'views/beacon.html',
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

$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});