angular.module('starter.controllers', [])

.controller('WodCtrl', function($scope, $http) {

    ionic.Platform.ready(function(){
      console.log("inside ready function");

      $scope.training = function(){
        console.log("working");
        $scope.workout=[];
        $http.get('http://localhost:3000/new').
        success(function(data) {
            $scope.workout.push(data);
            console.log(data);
            console.log(data.date);
            console.log($scope.workout.push(data));
          }).
            error(function(data){
              console.log("error");
            });
      };
    });
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
