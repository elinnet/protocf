app = angular.module('starter.factory',[]);

app.factory('Workout', function($firebaseArray){
  var itemsRef = new Firebase("https://incandescent-inferno-5080.firebaseio.com");
  return $firebaseArray(itemsRef);
});

app.factory('Workoutv2', function($firebaseArray){
  var itemsRef = new Firebase("https://incandescent-inferno-5080.firebaseio.com");
  return $firebaseArray(itemsRef);
});

app.factory('Metcon', function($firebaseArray){
  var itemsRef = new Firebase("https://incandescent-inferno-5080.firebaseio.com");
  return $firebaseArray(itemsRef);
});
