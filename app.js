(function(){

'use strict'

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

function LunchCheckController($scope){
  $scope.food = "";
  $scope.message = "hello";


//a function that split user input into different substrings
  $scope.foodList = function(){
    var foodItems = $scope.food.split(",");

    //check number of items
    if (foodItems.length <= 3){
      $scope.message = "Enjoy";
    }
    else {
      $scope.message = "Too much"
    }
  }

}
})();
