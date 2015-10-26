angular.module('starter.controllers', [])

.controller('WodCtrl', function($scope, Workout) {

    $scope.workout = Workout;

    $scope.format = function(string){
      console.log(string);
      // var newString = string.replace(/\./g,"\n");
      // return newString;
    };

    $scope.personalBest = function(arg){
      console.log(arg);
    };
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
