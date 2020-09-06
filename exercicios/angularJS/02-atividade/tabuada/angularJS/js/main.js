var app = angular.module('tabuada', []);
app.controller('controlador', function($scope) {
$scope.multiplicadores = [1,2,3,4,5,6,7,8,9,10];

$scope.mostrarTabelas = function (inicial, final) {

    tabs = [];

    for(i=inicial; i<=final; i++){
        tabs.push(i);
    }

    $scope.tabuadas = tabs;

}

});