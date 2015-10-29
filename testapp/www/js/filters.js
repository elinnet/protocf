var app = angular.module('starter.filters',[]);

app.filter('myFilter',function(){
  return function(input){
    if (input === undefined){
      return;
    }
    return input.replace(/\./g, '\n');
  };
});
