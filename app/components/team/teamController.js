define(['app'], function (app) {
    'use strict';

    //This controller retrieves data from the teamData.json and associates it with the $scope
    app.controller('TeamController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get("app/components/team/teamData.json").success(function(data) {
                $scope.team = data;
            });
        }
    ]);
});