app.directive('detailOneCur', function(){
    return {
        restrict : 'E',
        templateUrl : 'public/js/main/directives/detailonecur.directive.html',
        replace : true,
        scope : {
            currencyData : "=",
            timeUpdate : "="
        }
    }
});