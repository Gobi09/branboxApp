angular.module('starter.controllers', ["oc.lazyLoad",'ngRoute'])

.controller('DashCtrl', function($scope,$ocLazyLoad) {
        //$ocLazyLoad.load("assets/js/charts.js");
        //$ocLazyLoad.load("assets/js/flot-charts/curved-line-chart.js");
        //$ocLazyLoad.load("assets/js/functions.js");
        //$ocLazyLoad.load("js/charts.js").then(function() {
        //  console.log('loaded!!');
        //})
  
  // $scope.$on('$viewContentLoaded', function(){
  //  console.log('success loaded');
  //});
  //
  
  })
//.controller('galleryCtrl', function($scope,$ocLazyLoad) {
//        $ocLazyLoad.load("assets/js/functions.js");
//  })

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
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
