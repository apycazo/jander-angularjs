// ===============================================
// Demo service
// ===============================================
function DemoService($rootScope, $http) {
    function echo (value) {
        return {
            originalValue: value,
            safeStringValue: (typeof value === 'undefined' || value == null) ? "" : value,
            timestamp: `${Date.now()}`
        }
    }
    return {
        echo: echo
    }
}
angular.module('app').factory('DemoService', ['$rootScope', '$http', DemoService]);