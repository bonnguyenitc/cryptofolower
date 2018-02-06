app.factory('globalDataService',['$http', function($http){
    var global = {};
    global.getGlobalData = function(){
        return $http({
            method: 'GET',
            url: 'https://api.coinmarketcap.com/v1/global/'
        });
    };
    global.getCoinList = function(){
        return $http({
            method: 'GET',
            url: 'https://bittrex.com/api/v1.1/public/getmarkets'
        });
    }
    return global;
}]);