require.config({
    baseUrl: 'app',
    urlArgs: 'v=1.0'
});

require([
    'app',
    'services/routeResolver',
    'components/team/teamController'
], function () {
    // angular.bootstrap(document, ['customersApp']);
});