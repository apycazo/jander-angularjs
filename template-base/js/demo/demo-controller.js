// ===============================================
// Demo controller
// ===============================================
function DemoController($scope, $http, DemoService) {
    // include data bindings
    angular.extend($scope, {
        data: {
            panelTitle: 'Demo Controller Panel Demo',
            version: '0.0.1',
            text: '',
            status: 'nothing to report'
        }
    });
    angular.extend($scope, {
        fn: {
            alert: function (text = 'alert!') {
                $scope.data.status = 'clicked alert, attended from "DemoController"';
                alert(text);
            },
            echo: function () {
                $scope.data.status = JSON.stringify(DemoService.echo($scope.data.text));
            }
        }
    });
}

angular.module('app').controller('DemoController', ['$scope', '$http', 'DemoService', DemoController]);