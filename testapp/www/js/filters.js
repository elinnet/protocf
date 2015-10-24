var app = angular.module('starter.filters',[]);

app.filter('myFilter',function(){
  return function(input){
    return input.replace(/\./g, '\n');
  };
});
