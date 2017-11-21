var styleManagingApp = angular.module("styleManagingApp", []);

styleManagingApp.controller("styleManagingAppCtrl", function ($scope) {
    $scope.data = styleManagingModel;

    $scope.classInUse = function (classMustBeUsed) {
        $scope.selectedClass = classMustBeUsed;

    };
});