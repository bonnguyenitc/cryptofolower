app.controller('coinlistController',['$scope','$http','globalDataService',function($scope, $http,globalDataService){
    globalDataService.getGlobalData().then(function successCallback(response) {
        $scope.data = response.data;
        //console.log($scope.data);    
        $scope.loading = false;
    }, function errorCallback(response) {
        console.log(response);  
    });
    globalDataService.getCoinList().then(function successCallback(response) {
        $scope.coinlist = response.data;
        console.log($scope.coinlist);    
        $scope.loading = false;
    }, function errorCallback(response) {
        console.log(response);  
    });
    
}]);