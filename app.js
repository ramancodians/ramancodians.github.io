var app = angular.module('dishq', ['ngAnimate']);

app.controller('MainCtrl', function ($scope, $timeout) {
    $scope.startWiz = false;
    var index = 0;
    $scope.steps = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $scope.formComplition = $scope.steps.indexOf(1);

    $scope.howSpicy = ['No Chillies please!',
                      'Little bit', 'According to the dish', 'A bit spicy', 'I <3 it red hot!'];
    $scope.atmoshere = ['exotic','family','roof top','pub','hotel','5 star','Street Side']
    
    $scope.allergicFoods = ['ginger','onions','tomatoes','rice','wheat','other'];
    

    $scope.cuisines = [
        {
            "name": "North Indian",
            "img": "1.jpg"
        },
        {
            "name": "South Indian",
            "img": "2.jpg"
        },
        {
            "name": "Chinese",
            "img": "3.jpg"
        },
        {
            "name": "Desserts",
            "img": "4.jpg"
        },
        {
            "name": "Biryani",
            "img": "5.jpg"
        },
        {
            "name": "Afgani",
            "img": "6.jpg"
        },
        {
            "name": "Italian",
            "img": "7.jpg"
        },
        {
            "name": "Thai",
            "img": "8.jpg"
        },
        {
            "name": "Sea Food",
            "img": "9.jpg"
        }
    ];


    $scope.changeSlide = function () {
        console.log("Clicked!!");
        $('.card.active').addClass('rotateOutUpLeft removeFromUi');

        $timeout(function () {
            $scope.startWiz = true;
        }, 700);

        $timeout(function () {
            $('.card.active').addClass('hide');
        }, 700);

        $scope.steps[index] = 1;
       

    }

    $scope.closeEverything = function(){
        $scope.sideToggle = false;
        $scope.overlay = false;
    }
    
    $scope.exitWiz = function(){
        $scope.overlay = true;
        $scope.popUp = true;
    }
    
    $scope.finish = function(){
        $scope.finished = true;
        $scope.overlay = true;
    }
    
    $scope.next = function () {

        if ($scope.steps.indexOf(1) == 0) {
            $scope.formComplition = 9;
        } else {
            $scope.formComplition = ($scope.steps.indexOf(1) + 1) * 9;
        }


        $timeout(function () {
            $scope.steps[$scope.steps.indexOf(1)] = 0;
            $timeout(function(){
                $scope.steps[++index] = 1;
            },890);
        },0);

        console.log($scope.steps);
    }
    
    $scope.later = function(){
        $scope.startWiz = false;
        $scope.overlay = false;
        
    }
    
    $scope.openSide = function(){
        $scope.overlay = !$scope.overlay;
        $scope.sideToggle = !$scope.sideToggle;
        $scope.popUp = false;
        $scope.finished = false;
    }

});