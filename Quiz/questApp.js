var questApp = angular.module("questApp", []);
var questAppCtrl = questApp.controller("questAppCtrl", function ($scope) {
    $scope.quizModel = quizModel;

    $scope.questionAnswers = [];
    $scope.count = 0;
    $scope.rightAnswers = [3, 1, 4, 4, 1];


    $scope.firstQuestionAnswer = function () {
        if ($scope.questionAnswers[0] == $scope.rightAnswers[0]) {
            $scope.count++

        }
        $scope.firstQuestionAnswerEnable = true;
    };
    $scope.secondQuestionAnswer = function () {
        if ($scope.questionAnswers[1] == $scope.rightAnswers[1]) {
            $scope.count++
        }
        $scope.secondQuestionAnswerEnable = true;
    };
    $scope.thirdQuestionAnswer = function () {
        if ($scope.questionAnswers[2] == $scope.rightAnswers[2]) {
            $scope.count++
        }
        $scope.thirdQuestionAnswerEnable = true;
    };
    $scope.fourthQuestionAnswer = function () {
        if ($scope.questionAnswers[3] == $scope.rightAnswers[3]) {
            $scope.count++
        }
        $scope.fourthQuestionAnswerEnable = true;
    };
    $scope.fifthQuestionAnswer = function () {
        if ($scope.questionAnswers[4] == $scope.rightAnswers[4]) {
            $scope.count++
        }
        $scope.fifthQuestionAnswerEnable = true;
    };
    

});
