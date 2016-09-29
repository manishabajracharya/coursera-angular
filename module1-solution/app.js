(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckfunction);

LunchCheckfunction.$inject =['$scope'];

function LunchCheckfunction($scope){
  $scope.lunchmenu = "";
  $scope.message="";
  $scope.color_code="";

  $scope.checklunchmenu = function(){
    var count=0;
    var arrayofitems=$scope.lunchmenu.split(',');

    for(var i=0;i<arrayofitems.length;i++){
      if(arrayofitems[i].trim().length>0){
        count++;
      }
    }
    if(count==0){
      $scope.message="Please enter data first";
      $scope.color_code="red";
    }
    else if(count>0 && count<4){
      $scope.message="Enjoy!";
      $scope.color_code ="green";
    }
    else if(count>=4){
      $scope.message="Too much!";
      $scope.color_code="green";
    }
  };

}

})();
