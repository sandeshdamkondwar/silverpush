app.controller('TeamController', ['$scope','$http', TeamController])
	.controller('DetailsController', ['$scope','$http', '$routeParams', DetailsController]);

function TeamController ($scope, $http) {
    $http.get("app/data/teamData.json").success(function(data) {
        $scope.team = data;
        $scope.query = '';
        $scope.profileImagesPath = "../img/team-img/";
        $scope.empOrderBy = 'name';
    });
}

function DetailsController ($scope, $http, $routeParams) {
    $http.get("app/data/teamData.json").success(function(data) {
        $scope.team = data;
        $scope.profileImagesPath = "../img/team-img/";
        $scope.id = $routeParams.id;
    });
}