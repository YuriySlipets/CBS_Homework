var calc = angular.module("Calculator", []);
var calcCtrl = calc.controller("calcCtrl", function ($scope) {

    $scope.result = null;

    $scope.plusBtn = function () {
        $scope.result = $scope.firsNumber + $scope.secondNumber;
    };
    $scope.minusBtn = function () {
        $scope.result = $scope.firsNumber - $scope.secondNumber;
    }
    $scope.multiplyBtn = function () {
        $scope.result = $scope.firsNumber * $scope.secondNumber;
    }
    $scope.divisionBtn = function () {
        $scope.result = $scope.firsNumber / $scope.secondNumber;
    }


});