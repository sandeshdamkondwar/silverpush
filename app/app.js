/**
 * SPWebApp Module
 *
 * Description
 */

var app = angular.module('SPWebApp', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider', routeProvider])
    .config(['$locationProvider', locationProvider]);

function routeProvider ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/homeView.html'
    })
    .when('/home', {
        templateUrl: 'app/views/homeView.html'
    })
    .when('/team', {
        templateUrl: 'app/views/teamView.html',
        controller: "TeamController"
    })
    .when('/tech', {
        templateUrl: 'app/views/techView.html'
    })
    .when('/company', {
        templateUrl: 'app/views/companyView.html'
    })
    .when('/contactus', {
        templateUrl: 'app/views/contactusView.html'
    })
    .when('/investors', {
        templateUrl: 'app/views/investorsView.html'
    })
    .when('/career', {
        templateUrl: 'app/views/careerView.html'
    })
    .when('/analytics', {
        templateUrl: 'app/views/analyticsView.html'
    })
    .when('/targeting', {
        templateUrl: 'app/views/targetingView.html'
    })
    .when('/measurement', {
        templateUrl: 'app/views/measurementView.html'
    })
     .when('/beacon', {
        templateUrl: 'app/views/beaconView.html'
    })
    .otherwise({
        redirectTo: '/'
    });
}

function locationProvider ($locationProvider) {
    $locationProvider.hashPrefix("!");
}
