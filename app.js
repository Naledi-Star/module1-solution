(function(){

'use strict'

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

function LunchCheckController($scope){
  $scope.food = "";
  $scope.message = "";


//a function that split user input into different substrings
  $scope.foodList = function(){
    let foodItems = $scope.food.split(",");

    if ($scope.food === "") {
      $scope.message = "Please enter your food first";
    } 
    else if (foodItems.length > 0 && foodItems.length <= 3) {
      $scope.message = "Enjoy!";
    } 
    else {
      $scope.message = "Too much!";
    }
  }

}
})();
