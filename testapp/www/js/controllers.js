angular.module('starter.controllers', [])

.controller('WodCtrl', function($scope, Workout) {


    $scope.workout = Workout;

    $scope.format = function(string){
      console.log(string);
      // var newString = string.replace(/\./g,"\n");
      // return newString;
    };

})

// .controller('ChatsCtrl', function($scope, Chats) {
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
