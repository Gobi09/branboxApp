angular.module('starter.controllers', ["oc.lazyLoad",'ngRoute'])

.controller('DashCtrl', function($scope,$ocLazyLoad) {

  
  })
.controller('contactCtrl', function($scope,$http) {
    $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/branbox.php', {branboxVariable:'contactUs',businessId:'6'},{headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} })     
    .success(function(data) {      
    // contact map 
        var myLatlng = new google.maps.LatLng(data['latitude'], data['longitude']);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("location"), mapOptions);     
          var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(data['latitude'], data['longitude']),
            map: map,
            title: "My Location"
          });
        $scope.map = map;
        // contact information  
        $scope.name = '<div class="contactUsName">' +data['brandName']+','+ '</div>'; 
          $scope.companyName = '<div class="contactUsAdd">' +data['companyName']+','+ '</div>'; 
          $scope.address1 = '<div class="contactUsAdd">' +data['address1']+','+ '</div>'; 
          $scope.address2 = '<div class="contactUsAdd">' +data['address2']+','+ '</div>'; 
          $scope.city = '<div class="contactUsAdd">' +data['city']+','+ '</div>'; 
          $scope.state = '<div class="contactUsAdd">' +data['state']+','+ '</div>'; 
          $scope.country = '<div class="contactUsAdd">' +data['country']+','+ '</div>'; 
          $scope.postalCode = '<div class="contactUsAdd">' +data['postalCode']+','+ '</div>'; 
          $scope.phoneNumber = '<div class="contactUsAdd">' +data['phoneNumber1']+','+ '</div>'; 
          $scope.email = '<div class="contactUsAdd">' +data['email1']+','+ '</div>'; 
          $scope.website = '<div class="contactUsAdd">' +data['website']+','+ '</div>'; 
    }).error(function(){         
      $scope.error = "server Error";     
     });
    
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


//author Pravinkumar on 20/8/2015
.controller('aboutUs', function($scope,$http) {
  $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/branbox.php', {branboxVariable:'aboutUs',businessId:'1'},{headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} })     
  .success(function(data) {    
    $scope.aboutImages = { src : data[0]['image'] };
    $scope.title = data[0]['title'];
    $scope.description = data[0]['description'];     
  }).error(function(){         
    $scope.error = "server Error";     
  }); 
})


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
