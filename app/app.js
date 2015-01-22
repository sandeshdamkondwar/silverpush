/**
 * SPWebApp Module
 *
 * Description
 */

(function () {
    angular.module('SPWebApp', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider', routeProvider])
        .config(['$locationProvider', locationProvider])
        .controller('TeamController', ['$scope','$http',
            function($scope, $http) {
                $http.get("app/components/team/teamData.json").success(function(data) {
                    $scope.team = data;
                });
            }
        ]);

    function routeProvider ($routeProvider) {
        var componentsDir = "app/components/";
        $routeProvider.when('/', {
            templateUrl: componentsDir + 'home/homeView.html'
        })
        .when('/home', {
            templateUrl: componentsDir + 'home/homeView.html'
        })
        .when('/team', {
            templateUrl: componentsDir + 'team/teamView.html',
            controller: "TeamController"
        })
        .when('/tech', {
            templateUrl: componentsDir + 'tech/techView.html'
        })
        .when('/company', {
            templateUrl: componentsDir + 'company/companyView.html'
        })
        .when('/contactus', {
            templateUrl: componentsDir + 'contactus/contactusView.html'
        })
        .when('/investors', {
            templateUrl: componentsDir + 'investors/investorsView.html'
        })
        .when('/career', {
            templateUrl: componentsDir + 'career/careerView.html'
        })
        .when('/analytics', {
            templateUrl: componentsDir + 'analytics/analyticsView.html'
        })
        .when('/targeting', {
            templateUrl: componentsDir + 'targeting/targetingView.html'
        })
        .when('/measurement', {
            templateUrl: componentsDir + 'measurement/measurementView.html'
        })
         .when('/beacon', {
            templateUrl: componentsDir + 'beacon/beaconView.html'
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