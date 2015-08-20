angular.module('starter.controllers', ["oc.lazyLoad",'ngRoute'])

.controller('DashCtrl', function($scope,$ocLazyLoad) {

  
  })
.controller('contactCtrl', function($scope) {
    var myLatlng = new google.maps.LatLng(11.9310, 79.7852);
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("location"), mapOptions);
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(11.9310, 79.7852),
        map: map,
        title: "My Location"
      });
    $scope.map = map;

  
  })

.controller('locationCtrl', function($scope, Chats) {
  
  var myLatlng = new google.maps.LatLng(11.9310, 79.7852);
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("locationMap"), mapOptions);
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(11.9310, 79.7852),
        map: map,
        title: "My Location"
      });
    $scope.map = map;
  
})




.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

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


.controller('MenuController', function($scope,$http,$location) {

    var businessId=1;
          //Menus from server and sync here.....
    $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxMenu.php',{bussId: businessId}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
      .success(function (json) {
       
        var ajaxlength = json.rows.length;
       

         $scope.MenuData= json.rows;
          console.log($scope.MenuData);
      }).error(function(){  
          alert("server Error");
       });



})

.controller('SubMenuController', function($scope,$http,$location) {

    var businessId=1;
   var url = $location.url();
    var temp = url.split("=");
    var getMenuId=temp[1];
    //var getMenuId=11;

          //Menus from server and sync here.....
     $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxSubMenuWithItem.php',{bussId:businessId,menuId:getMenuId}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
      .success(function (json) {
       
        var ajaxlength = json.rows.length;
       

         $scope.SubMenuData= json.rows;
          //console.log($scope.SubMenuData);
      }).error(function(){  
          alert("server Error");
       });
})

.controller('SubMenuItemController', function($scope,$http,$location) {

    var businessId=1;
   var url = $location.url();
  var url = $location.url();
    var temp = url.split("=");
    var menuId=temp[1];
    var subMenuId=temp[2];
    //var getMenuId=11;

          //Menus from server and sync here.....
     $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxSubMenu.php',{bussId:businessId,menuId:menuId,subMenuId:subMenuId}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
      .success(function (json) {
       
        var ajaxlength = json.rows.length;
       

         $scope.SubMenuItemData= json.rows;
          //console.log($scope.SubMenuData);
      }).error(function(){  
          alert("server Error");
       });


       $scope.minus=function(val,index,item)
    {
      alert();
       
     var total=$("#quantity"+index).val();
     total--;
      if (total>=1)
      {
         
          var price=item.price *total;
          $("#quantity"+index).val(total);
          $("#price"+index).html(price);
          $("#addtocart"+index).val(total);
      }
      else{
          var price=item.price*1;
          $("#price"+index).html(price);
        }
    }

    $scope.plus=function(val,index,item)
    {
      var total= $("#quantity"+index).val();
        if (total>=1)
        {
         
            total++;
            var price=item.price *total;
              $("#quantity"+index).val(total);
              $("#price"+index).html(price);
              $("#addtocart"+index).val(total);
          
        }
    }
})
