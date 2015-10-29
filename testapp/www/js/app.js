// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'firebase', 'ui.router', 'starter.controllers', 'starter.services','starter.filters','starter.factory'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.wod411', {
    url: '/wod411',
    views: {
      'tab-wod': {
        templateUrl: 'templates/tab-wod411.html',
        controller: 'WodCtrl411'
      }
    }
  })

  .state('tab.wod412', {
    url: '/wod412',
    views: {
      'tab-wod': {
        templateUrl: 'templates/tab-wod412.html',
        controller: 'WodCtrl412'
      }
    }
  })

  .state('tab.wod413', {
    url: '/wod413',
    views: {
      'tab-wod': {
        templateUrl: 'templates/tab-wod413.html',
        controller: 'WodCtrl413'
      }
    }
  })

  .state('tab.wod414', {
    url: '/wod414',
    views: {
      'tab-wod': {
        templateUrl: 'templates/tab-wod414.html',
        controller: 'WodCtrl414'
      }
    }
  })

  .state('tab.wod415', {
    url: '/wod415',
    views: {
      'tab-wod': {
        templateUrl: 'templates/tab-wod415.html',
        controller: 'WodCtrl415'
      }
    }
  })


  .state('tab.wod416', {
    url: '/wod416',
    views: {
      'tab-wod': {
        templateUrl: 'templates/tab-wod416.html',
        controller: 'WodCtrl416'
      }
    }
  })


  .state('tab.wod417', {
    url: '/wod417',
    views: {
      'tab-wod': {
        templateUrl: 'templates/tab-wod417.html',
        controller: 'WodCtrl417'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  //state for metcon button
  .state('metcon',{
    url: '/metcon', // will later make this a a child of wod
    templateUrl: 'templates/metcon.html',
    controller: 'MetconCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/wod411');

});
