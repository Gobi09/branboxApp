angular.module('starter.controllers', ["oc.lazyLoad",'ngRoute'])

.controller('DashCtrl', function($scope,$ocLazyLoad) {

  
  })
.controller('contactCtrl', function($scope) {

var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
var mapOptions = {
  zoom: 4,
  center: myLatlng
}
var map = new google.maps.Map(document.getElementById("location"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
});

// To add the marker to the map, call setMap();
marker.setMap(map);


      // var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
      //   var mapOptions = {
      //       center: myLatlng,
      //       zoom: 16,
      //       mapTypeId: google.maps.MapTypeId.ROADMAP
      //   };
      //   var map = new google.maps.Map(document.getElementById("location"), mapOptions);
      //   navigator.geolocation.getCurrentPosition(function(pos) {
      //       map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      //       var myLocation = new google.maps.Marker({
      //           position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
      //           map: map,
      //           title: "My Location"
      //       });
      //   });
      //   $scope.map = map;

  
  })
.controller('ChatsCtrl', function($scope, Chats) {

  
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

// .controller('galleryCrtl', function($scope,$ocLazyLoad) {
//       alert('test');
//       var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
//         var mapOptions = {
//             center: myLatlng,
//             zoom: 16,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         var map = new google.maps.Map(document.getElementById("location"), mapOptions);
//         navigator.geolocation.getCurrentPosition(function(pos) {
//             map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//             var myLocation = new google.maps.Marker({
//                 position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
//                 map: map,
//                 title: "My Location"
//             });
//         });
//         console.log(map);
//         $scope.map = map;
// });
