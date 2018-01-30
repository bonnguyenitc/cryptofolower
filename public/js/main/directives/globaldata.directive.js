app.directive('globalDataBar', function(){
    return {
        restrict : 'E',
        templateUrl : 'public/js/main/directives/globaldata.directive.html',
        replace : true,
        scope : {
            globalData : "="
        }
    }
});