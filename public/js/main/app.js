var app = angular.module('cryptoApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'public/js/main/template/home.html',
        controller : 'homeController'
    });
    
});



  