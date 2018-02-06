var app = angular.module('cryptoApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'public/js/main/template/home.html',
        controller : 'homeController'
    });
    $routeProvider.when('/coinlist', {
        templateUrl: 'public/js/main/template/coinlist.html',
        controller : 'coinlistController'
    }); 
    $routeProvider.when('/cryptoexchange', {
        templateUrl: 'public/js/main/template/cryptoexchange.html',
        controller : 'coinlistController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'public/js/main/template/login.html',
        controller : 'loginController'
    });
    $routeProvider.when('/logup', {
        templateUrl: 'public/js/main/template/logup.html',
        controller : 'logupController'
    });
    
});



  