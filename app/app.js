/**
 * SPWebApp Module
 *
 * Description
 */

(function () {
    angular.module('SPWebApp', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider', routeProvider])
        .config(['$locationProvider', locationProvider]);

    function routeProvider ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/components/home/homeView.html'
        })
        .when('/home', {
            templateUrl: 'app/components/home/homeView.html'
        })
        .when('/team', {
            templateUrl: 'app/components/team/teamView.html'
        })
        .when('/tech', {
            templateUrl: 'app/components/tech/techView.html',
        })
        .when('/company', {
            templateUrl: 'app/components/company/companyView.html',
        })
        .when('/contactus', {
            templateUrl: 'app/components/contactus/contactusView.html',
        })
        .when('/investors', {
            templateUrl: 'app/components/investors/investorsView.html',
        })
        .when('/career', {
            templateUrl: 'app/components/career/careerView.html',
        })
        .when('/analytics', {
            templateUrl: 'app/components/analytics/analyticsView.html',
        })
        .when('/targeting', {
            templateUrl: 'app/components/targeting/targetingView.html',
        })
        .when('/measurement', {
            templateUrl: 'app/components/measurement/measurementView.html',
        })
         .when('/beacon', {
            templateUrl: 'app/components/beacon/beaconView.html',
        })
        .otherwise({
            redirectTo: '/'
        });
    }

    function locationProvider ($locationProvider) {
        $locationProvider.hashPrefix("!");
    }

    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
})();