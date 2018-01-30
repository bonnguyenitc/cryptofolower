app.controller('homeController',['$scope','$http','globalDataService','topCurService',function ($scope, $http,globalDataService,topCurService) {
    $scope.loading = true;
    globalDataService.getGlobalData().then(function successCallback(response) {
        $scope.data = response.data;    
        $scope.loading = false;
    }, function errorCallback(response) {
        console.log(response);  
    });
    topCurService.getTopCurData().then(function successCallback(response) {
        var d = new Date();
        d =d.getTime();
        $scope.data100 = {
            "dataC" : response.data,
            "dataT" : d
        };   
    }, function errorCallback(response) {
        console.log(response);  
    });
    $scope.searchKey = "";
}])