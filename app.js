var app = angular.module('app', ['ngAnimate']);

app.controller('MainCtrl', function ($scope) {
    $scope.test = "wow!!!";

    $scope.cards = [
    'raman',
    'pawan',
    'alka',
    'sonali',
    'suman',
    'nirmal',
    'shuvam'
];


});