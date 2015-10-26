app = angular.module('starter.factory',[]);

app.factory('Workout', function($firebaseArray){
  var itemsRef = new Firebase("https://incandescent-inferno-5080.firebaseio.com");
  return $firebaseArray(itemsRef);
});
