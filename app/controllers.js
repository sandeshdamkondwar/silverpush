app.controller('TeamController', ['$scope','$http', TeamController]);

function TeamController ($scope, $http) {
    $http.get("app/data/teamData.json").success(function(data) {
        $scope.team = data;
        $scope.query = '';
        $scope.empOrderBy = 'name';
    });
}