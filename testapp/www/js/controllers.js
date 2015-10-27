angular.module('starter.controllers', [])

.controller('WodCtrl', function($scope, Workout) {

    $scope.workout = Workout;

    $scope.format = function(string){
      console.log(string);
      // var newString = string.replace(/\./g,"\n");
      // return newString;
    };

    $scope.personalBest = function($event){
      console.log($event.target.innerHTML);
    };
})

.controller('MetconCtrl', function($scope){
  $scope.date = new Date();

})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
