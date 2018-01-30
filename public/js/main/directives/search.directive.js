app.directive('searchBar', function(){
    return {
        restrict : 'E',
        templateUrl : 'public/js/main/directives/search.directive.html',
        replace : true,
        scope : {
            keySearch : "="
        }
    }
});