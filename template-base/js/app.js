// ===============================================
// Base controller and main module definition
// ===============================================
function BaseController($rootScope, $scope) {
    angular.extend($scope, {
        navbarTitle: "AngularJS Starter App"
    });
}
angular.module('app', [])
    .controller('BaseController', ['$rootScope', '$scope', BaseController])
    .run(['$rootScope', '$window', '$location', function ($rootScope, $window, $location) {
        // empty
    }]);