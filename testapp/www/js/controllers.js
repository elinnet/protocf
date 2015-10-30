var ref = new Firebase("https://incandescent-inferno-5080.firebaseio.com");
var metconRef = new Firebase('https://incandescent-inferno-5080.firebaseio.com/metcon');

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

.controller('WodCtrl414', function($scope, Workout) {

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

.controller('WodCtrl415', function($scope, Workout) {

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

.controller('WodCtrl416', function($scope, Workout) {

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


.controller('WodCtrl417', function($scope, Workout) {

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
 $scope.metcon = {};

 $scope.submit = function(user){
   $scope.metcon = angular.copy(user);
   $scope.metcon.createdAt = Firebase.ServerValue.TIMESTAMP;

   var dailyMetconResult = $scope.metcon;
   var usersMetcon = ref.child("metcon");
   var newMetcon = usersMetcon.push();
   newMetcon.set(dailyMetconResult);


   //to read the data

   ref.on("value", function(snapshot) {
       console.log(snapshot.val());
     }, function (errorObject) {
       console.log("The read failed: " + errorObject.code);
   });
 };

 $scope.list = function(){
   metconRef.orderByChild("createdAt").on("value", function(snapshot) {
     snapshot.forEach(function(data) {
       console.log("The exercise was created on " + new Date(data.val().createdAt));
     });
   });
 };

 $scope.byDate = function(date){
   date = new Date (date);
   date = date.valueOf();
   metconRef.orderByChild('createdAt')
     .startAt(date)
     .on('child_added', function(snapshot) {
       console.log(snapshot.key());
     });
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
