app.factory('globalDataService',['$http', function($http){
    var global = {};
    global.getGlobalData = function(){
        return $http({
            method: 'GET',
            url: 'https://api.coinmarketcap.com/v1/global/'
        });
    }
    return global;
}]);