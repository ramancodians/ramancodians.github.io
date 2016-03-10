// Coded by Raman Choudhary

var app = angular.module('batman', ['ngRoute', 'ngAnimate', 'firebase']);

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
                templateUrl: 'public/views/projects/naturalcrown.html',
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
            .when('/resume', {
                templateUrl: 'public/views/resume.html',
                controller: 'ResumeCtrl'
            })
            .when('/credits', {
                templateUrl: 'public/views/credits.html',
                controller: 'CreditsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
  }]);


app.service('ContactForm', function ($firebaseObject, $scope) {

    var url = 'https://raman-ch.firebaseio.com/';
    var ref = new Firebase(url);
    return $firebaseObject(ref);

});

app.controller('MainCtrl', function ($scope, $http) {
    //load the quote.json
    $http.get('public/js/quotes.json')
        .then(function (res) {

            var n = Math.floor((Math.random() * 5) + 1);
            console.log(n);
            $scope.quotes = res.data[n];
        });

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
            "item": "Resume",
            "url": "resume"
        },
        {
            "item": "about me",
            "url": "about"
        },
        {
            "item": "contact me",
            "url": "contact"
        }
        
                      ];

    //view toggles

    $scope.isOpen = false;
    $scope.loaded = false;

    $scope.$on('$viewContentLoaded', function () {
        $scope.loaded = true;

        $("#typed").typed({
            strings: ["Full Stack Designer^500.^500."],
            typeSpeed: 2,
            loop: false,
            loopCont: 1,
            startDelay: 1
        });

    });

    $scope.sideMenuToggle = function () {
        $scope.isOpen = !$scope.isOpen;
    }


});

app.controller('WorkCtrl', function ($scope) {
    $scope.$on('$viewContentLoaded', function () {
        $scope.loaded = true;
        console.log('loaded projects')
    });
});

app.controller('HomeCtrl', function ($scope, $interval, $timeout) {
    $scope.$on('$viewContentLoaded', function () {
        $scope.loaded = true;
        var time = 0;
        $scope.draw = false;

        var iconStack = $('.icon');
        var iconAnimation = new TimelineMax();
        var firstTime = true;

        iconAnimation.to(".icon svg#code", 1, {
            className: "+=show"
        });

        iconAnimation.to(".icon svg#code", 4, {
            className: "+=draw"
        });

        var homeAnimation = new TimelineLite();

        homeAnimation.from('#helloBox', 0.6, {
            className: '+=animated rollIn'
        }, .5);

        homeAnimation.from('.me div.col-sm-8', 0.1, {
            className: '+=animated rollIn'
        });

        homeAnimation.from('.hello .meri-photo', 0.1, {
            className: '+=animated slideInRight'
        });
        homeAnimation.from('.do .col-xs-3', 0.1, {
            className: '+=animated slideInUp'
        });

        homeAnimation.from('.whatIam', 0.1, {
            className: '+=animated slideInRight'
        });

        homeAnimation.staggerFrom(".profiles .fa", 0.5, {
            autoAlpha: 0,
            x: -100
        }, 0.2, 1);
        //        homeAnimation.from(".take", 0.5, {
        //            autoAlpha: 0,
        //            y: 100
        //        });

    });
});

app.controller('ContactCtrl', function ($scope, $firebaseArray,$timeout) {

    $scope.MsgSent = false;
    $scope.MailNotSent = false;
    var ref = new Firebase("https://raman-ch.firebaseio.com");

    $scope.msgs = $firebaseArray(ref);
    $scope.$on('$viewContentLoaded', function () {
        $scope.loaded = true;
    });

    $scope.sendMail = function () {
        console.log('Mail sending');
 
        var newMsg = {
            "posted": new Date(),
            "msgText": $scope.msgText,
            "senderEmail": $scope.senderEmail,
            "senderName": $scope.senderName
        }


        $scope.msgs.$add(newMsg).then(function () {
            //$scope.MsgSent = true;
            $scope.MsgSent = true;
            
        }).catch(function () {
            $scope.MailNotSent = true;
        });

    }
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
app.controller('ProjectCtrl', function ($scope, $routeParams, $location, $rootScope) {
    $scope.projectList = ['bunky', 'prayas', 'christcode', 'naturalcrown', 'howhigh', 'connecto', 'studyalley', 'u25'];

    $('body').scrollTop(0);

    // animate just once, or till page refreshes!! 
    if (!$rootScope.projectAnimationDone) {
        var ProjectStackAnimation = new TimelineLite();
        ProjectStackAnimation.from('work .title', 1, {
            x: -100,
            autoAlpha: 0
        });
        ProjectStackAnimation.from('.work .line', 0.4, {
            width: 0
        });
        ProjectStackAnimation.from('.work .para', 1, {
            autoAlpha: 0,
            x: -100
        });
        ProjectStackAnimation.staggerFrom(".work .showcase .project", 3, {
            y: 100,
            opacity: 0,
            ease: Elastic.easeOut,
            force3D: true
        }, 0.1);
        ProjectStackAnimation.from('.work .next .kr', 0.4, {
            x: -100,
            autoAlpha: 0
        }, 5);
        ProjectStackAnimation.from('.work .next .btn-yo', 0.4, {
            x: 100,
            autoAlpha: 0
        }, 4.5);
        $rootScope.projectAnimationDone = true;
    }

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
app.controller('ShowcaseCtrl', function ($scope, $routeParams, $location) {



});


app.controller('ResumeCtrl', function ($scope) {
    $('body').scrollTop(0);
});