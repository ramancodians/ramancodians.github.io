// Coded by Raman Choudhary

var app = angular.module('batman', ['ngRoute', 'ngAnimate']);


app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/', {
                templateUrl: 'public/views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/projects', {
                templateUrl: 'public/views/projects.html',
                controller: 'ProjectCtrl'
            })
            .when('/credits', {
                templateUrl: 'public/views/credits.html',
                controller: 'CreditsCtrl'
            })
            //project pages routes *********************
            .when('/projects/christcode', {
                templateUrl: 'public/views/projects/christcode.html',
                controller: 'ProjectCtrl'
            })
            .when('/projects/u25', {
                templateUrl: 'public/views/projects/u25.html',
                controller: 'ProjectCtrl'
            })
            .when('/projects/bunky', {
                templateUrl: 'public/views/projects/bunky.html',
                controller: 'ProjectCtrl'
            })
            .when('/projects/studyalley', {
                templateUrl: 'public/views/projects/studyalley.html',
                controller: 'ProjectCtrl'
            })
            .when('/projects/naturalcrown', {
                templateUrl: 'views/projects/naturalcrown.html',
                controller: 'ProjectCtrl'
            })
            .when('/projects/howhigh', {
                templateUrl: 'public/views/projects/howhigh.html',
                controller: 'ProjectCtrl'
            })
            .when('/projects/connecto', {
                templateUrl: 'public/views/projects/connecto.html',
                controller: 'ProjectCtrl'
            })
            .when('/projects/prayas', {
                templateUrl: 'public/views/projects/prayas.html',
                controller: 'ProjectCtrl'
            })
            // *******************************************
            .when('/about', {
                templateUrl: 'public/views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/contact', {
                templateUrl: 'public/views/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
  }]);

app.controller('MainCtrl', function ($scope) {

    //side menu data
    $scope.sideMenu = [
        {
            "item": "home",
            "url": ""
        },
        {
            "item": "projects",
            "url": "projects"
        },
        {
            "item": "about me",
            "url": "about"
        },
        {
            "item": "blog",
            "url": "blog"
        },
        {
            "item": "site creadits",
            "url": "creadits"
        },
        {
            "item": "contact me",
            "url": "contact"
        }
                      ];

    //view toggles

    $scope.isOpen = false;
    $scope.loaded = false;
    $scope.test = 'Supper';
    console.log("Working bitch");

    $scope.$on('$viewContentLoaded', function () {
        $scope.loaded = true;
    });
});

app.controller('WorkCtrl', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        $scope.loaded = true;
    });
});

app.controller('HomeCtrl', function ($scope, $interval, $timeout) {
    $scope.$on('$viewContentLoaded', function () {
        $scope.loaded = true;
        var time = 0;
        $scope.draw = false;

        //icon stack
        $scope.iconStack = [1, 0, 0, 0];
        
        var iconStack = $('.icon');
        
        var iconAnimation = new TimelineLite();
        
        //iconAnimation.from(".icon svg:code",2,{strokeDasharray:500,strokeDashoffset:-1000,delay:0});
        
        
    });
});

app.controller('ContactCtrl', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        $scope.loaded = true;
    });
});


app.controller('AboutCtrl', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        $scope.loaded = true;
    });
});

//**********************************
//Project Controller
//**********************************
app.controller('ProjectCtrl', function ($scope, $routeParams, $location) {
    $scope.projectList = ['bunky', 'prayas', 'christcode', 'naturalcrown', 'howhigh', 'connecto', 'studyalley', 'u25'];

    $('body').scrollTop(0);
    
  

    $scope.getPreviousProject = function () {
        var currentLocation = $location.$$path.substring(10, $location.$$path.length);
        var i = $scope.projectList.indexOf(currentLocation);
        return $scope.projectList[i - 1];
    };

    $scope.getNextProject = function () {
        var currentLocation = $location.$$path.substring(10, $location.$$path.length);
        var i = $scope.projectList.indexOf(currentLocation);
        return $scope.projectList[i + 1];
    };

    $scope.getScore = function () {
        return $scope.projectList.indexOf($location.$$path.substring(10, $location.$$path.length));
    };

    console.log($routeParams);
});

//**********************************
//Credit Controller
//**********************************
app.controller('CreditsCtrl', function ($scope, $routeParams, $location) {

    console.log("credit page launched!");

});