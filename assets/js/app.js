var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = "Name";
    $scope.lastname = "Doe";

    $(document).ready(function() {
      $(".autoFill").keyup(function(){
        $scope.$apply();
      });
    });
});
