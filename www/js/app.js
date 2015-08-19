// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngRoute', 'starter.controllers', 'starter.services'])

//.run(function($ionicPlatform) {
//  $ionicPlatform.ready(function() {
//    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//    // for form inputs)
//    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//      cordova.plugins.Keyboard.disableScroll(true);
//
//    }
//    if (window.StatusBar) {
//      // org.apache.cordova.statusbar required
//      StatusBar.styleLightContent();
//    }
//  });
//})
//.directive( 'showNotifications', function( $parse ) {
//   return {
//       restrict: 'A',
//       link: function( $scope, element, attrs ) {    
//            //console.log(element);
//            //angular.element('<script src="js/charts.js"></script>').appendTo(element);
//            element.ready(function(){
//            $scope.$apply(function(){
//                //testtest();
//                var func = $parse(attrs.elemReady);
//                func($scope);
//            })
//          })
//       }
//    }
//})
//.config(function($stateProvider, $urlRouterProvider) {
.config(['$routeProvider','$stateProvider',
         function($routeProvider,$stateProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  //$stateProvider
  //.state('home', {
  //  url: '/dashboard',
  //  abstract: true,
  //  templateUrl: 'templates/dashboard.html',
  //  controller: 'DashCtrl'
  //})
  //.state('dashboard', {
  //  url: '/dashboard',
  //  templateUrl: 'templates/dashboard.html',
  //  controller: 'DashCtrl'
  //})
  //// setup an abstract state for the tabs directive
  //  .state('contactForm', {
  //  url: '/contactForm',
  //  templateUrl: 'templates/contactForm.html',
  //  controller: 'DashCtrl'
  //});
    //.state('menu', {url: "/", abstract: true})
    //.state('menu.dashboard', {
    //    url: '/dashboard',
    //    views: {'dashboard': {
    //        templateUrl: 'templates/dashboard.html'
    //        }
    //    }
    //})
    //.state('menu.contactUs', {
    //    url: '/contactUs',
    //    views: {'contactUs': {
    //        templateUrl: 'templates/contactForm.html'
    //        }
    //    }
    //})
    //.state('menu.help', {url: '/help', views: {'menuContent': {templateUrl: 'helpView.html', controller: 'HelpCtrl'} }  });
  //
  //// Each tab has its own nav history stack:
  //
  //.state('tab.dash', {
  //  url: '/Status',
  //  views: {
  //    'tab-dash': {
  //      templateUrl: 'templates/dashboard.html',
  //      controller: 'DashCtrl'
  //      }
  //  }
  //})
  //
  //.state('tab.chats', {
  //    url: '/chats',
  //    views: {
  //      'tab-chats': {
  //        templateUrl: 'templates/tab-chats.html',
  //        controller: 'ChatsCtrl'
  //      }
  //    }
  //  })
  //  .state('tab.chat-detail', {
  //    url: '/chats/:chatId',
  //    views: {
  //      'tab-chats': {
  //        templateUrl: 'templates/chat-detail.html',
  //        controller: 'ChatDetailCtrl'
  //      }
  //    }
  //  })
  //
  //.state('tab.account', {
  //  url: '/account',
  //  views: {
  //    'tab-account': {
  //      templateUrl: 'templates/tab-account.html',
  //      controller: 'AccountCtrl'
  //    }
  //  }
  //});

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider
  //   .when('/dashboard',
  //      {
  //          controller: 'DashCtrl',
  //          templateUrl: 'templates/dashboard.html'
  //      })
  //  .when('/contactForm',
  //      {
  //          templateUrl: 'templates/contactForm.html'
  //      })
  //  otherwise({
  //                redirectTo: '/DashCtrl'
  //             });
    
  $routeProvider
    .when('/dashboard',
        {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashCtrl'
        })
    .when('/contactForm',
        {
            templateUrl: 'templates/contactForm.html',
            controller: 'DashCtrl'
        })
    .when('/components',
        {
            templateUrl: 'templates/components.html',
            controller: 'DashCtrl'
        })
    .when('/gallery',
        {
            templateUrl: 'templates/gallery.html',
            controller: 'DashCtrl'
        })
    .otherwise('/dashboard');

}]);
//});
