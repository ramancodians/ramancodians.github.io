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
    
    $scope.sideMenuToggle = function(){
        $scope.isOpen = !$scope.isOpen;
    }
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
        
        var iconAnimation = new TimelineMax({repeat: -1});
        console.log("Animation strated");
        iconAnimation.to(".icon svg#code",.5,{className:"+=show"});
        iconAnimation.to(".icon svg#code",2,{className:"+=draw"});
        iconAnimation.to(".icon svg#code",1,{className:"-=draw"});
        iconAnimation.to(".icon svg#code",0,{className:"-=show"});
        
        iconAnimation.to(".icon svg#bulb",0,{className:"+=show"});
        iconAnimation.to(".icon svg#bulb",2,{className:"+=draw"});
        iconAnimation.to(".icon svg#bulb",1,{className:"-=draw"});
        iconAnimation.to(".icon svg#bulb",0,{className:"-=show"});
        
        iconAnimation.to(".icon svg#blog",0,{className:"+=show"});
        iconAnimation.to(".icon svg#blog",2,{className:"+=draw"});
        iconAnimation.to(".icon svg#blog",1,{className:"-=draw"});
        iconAnimation.to(".icon svg#blog",0,{className:"-=show"});
        
        iconAnimation.to(".icon svg#explorer",0,{className:"+=show"});
        iconAnimation.to(".icon svg#explorer",2,{className:"+=draw"});
        iconAnimation.to(".icon svg#explorer",1,{className:"-=draw"});
        iconAnimation.to(".icon svg#explorer",0,{className:"-=show"});
        
        var homeAnimation = new TimelineLite();
        var times = 1;
        homeAnimation.from('#helloBox',1*times,{width:20,transformOrigin: "right",left: 300,autoAlpha:0});
        homeAnimation.from('.me div.col-sm-8',1*times,{width:0,left: 400,autoAlpha:0});
        homeAnimation.from('.do .whatIam',.5*times,{width:0,autoAlpha:0});
        homeAnimation.from('.do .col-xs-3',1*times,{width:0,autoAlpha:0},'-=.8');
        
        
         homeAnimation.from('.hello .meri-photo',1*times,{autoAlpha:0,y:-50});
         homeAnimation.from('.pp',.5,{autoAlpha:0,rotate:50});
         homeAnimation.from('.take',.5,{autoAlpha:0,y:-50});
      
        
        
        
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
     $('body').scrollTop(0);
});

//**********************************
//Project Controller
//**********************************
app.controller('ProjectCtrl', function ($scope, $routeParams, $location) {
    $scope.projectList = ['bunky', 'prayas', 'christcode', 'naturalcrown', 'howhigh', 'connecto', 'studyalley', 'u25'];

    $('body').scrollTop(0);
    
    //project stagger
    TweenMax.staggerFrom(".showcase .project", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);

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