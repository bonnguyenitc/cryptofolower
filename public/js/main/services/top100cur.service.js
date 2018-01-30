app.factory('topCurService',['$http', function($http){
    var global = {};
    global.getTopCurData = function(){
        return $http({
            method: 'GET',
            url: 'https://api.coinmarketcap.com/v1/ticker/?limit=100'
        });
    }
    return global;
}]);