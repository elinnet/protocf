angular.module('starter.controllers', [])

.controller('WodCtrl411', function($scope, Workout) {
    $scope.workout = Workout;
    console.log($scope.workout);

    $scope.personalBest = function($event){
      console.log($event.target.innerHTML);
    };
})

.controller('WodCtrl412', function($scope, Workout) {

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

.controller('WodCtrl413', function($scope, Workout) {

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

  $scope.metcon = {};

  $scope.submit = function(user){
    // var timestamp = new Date().getTime();
    $scope.metcon = angular.copy(user);
    $scope.metcon.dateinfo = new Date();
    console.log($scope.metcon);

    var dailyMetconResult = $scope.metcon;
    console.log(dailyMetconResult);

    var ref = new Firebase("https://incandescent-inferno-5080.firebaseio.com");

    var usersMetcon = ref.child("metcon");

    var newMetcon = usersMetcon.push();

    newMetcon.set(dailyMetconResult);


    //to read the data

    var reference = new Firebase("https://incandescent-inferno-5080.firebaseio.com/metcon");
    reference.on("value", function(snapshot) {
        console.log(snapshot.val());
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

  };

  $scope.data = function(val){
    console.log(val);
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
