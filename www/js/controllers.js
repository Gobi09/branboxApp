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

.controller('locationCtrl', function($scope, $http) {
  $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/branbox.php',{'branboxVariable':'location', businessId:'1'},{headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} }).success(function(data){
    $scope.initialize(data);
  }).error(function(){
      $scope.data = "error DataBase";
  });
  //initialize map
  $scope.initialize = function(data) {
    var infowindow = new google.maps.InfoWindow()
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
        center: new google.maps.LatLng(data[0]['latitude'], data[0]['longitude']),
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("locationMap"), mapOptions);
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(11.9310, 79.7852),
    for (var i = 0; i < data.length; i++) {
      var image = 'img/logo.jpg';
      var marker = new google.maps.Marker({
        map: map,
        title: "My Location"
        icon: image,
        position: new google.maps.LatLng (data[i]['latitude'], data[i]['longitude'])
      });
    $scope.map = map;
  
      var content = "Business Location :" + data[i]['location'];     
      google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
           infowindow.setContent(content);
           infowindow.open(map,marker);
        };
      })(marker,content,infowindow)); 
    } 
    $scope.locationMap = map;
  }
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
.controller('gallery', function($scope,$http) {
  $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/branbox.php', {branboxVariable:'gallery',businessId:'1'},{headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} })     
  .success(function(data) {    
    $scope.galleryImages=data;
    $scope.$on('test', function(ngRepeatFinishedEvent) {
        $('.lightbox').lightGallery({
            enableTouch: true
        });
    });
  }).error(function(){         
    $scope.error = "server Error";     
  }); 
})
.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
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
  $("#sidebar").removeClass("toggled");
  $("#menu-trigger").removeClass("open");
    var businessId=1;
    var url = $location.url();
    var url = $location.url();
    var temp = url.split("=");
    var menuId=temp[1];
    var subMenuId=temp[2];
    //var getMenuId=11;
    var ingredients=[];

          //Menus from server and sync here.....
     $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxSubMenu.php',{bussId:businessId,menuId:menuId,subMenuId:subMenuId}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
      .success(function (json) {
       
        var ajaxlength = json.rows.length;
        // console.log( json.rows[0].menuId);
        // console.log( json.rows[0].subMenuId);
        // console.log( json.rows[0].id);
         for(var i=0; i<ajaxlength;i++)
         {
            $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxIngredients.php',{bussId:businessId,menuId:json.rows[i].menuId,subMenuId:json.rows[i].subMenuId,itemId:json.rows[i].id}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
            .success(function (jsonIng) {

               for(var i = 0; i < itemLength; i++) {
                      var row = menudatas.item(i);
                      var obj = {id:row.id,businessId: row.businessId,menuId:row.menuId,subMenuId:row.subMenuId,itemName:row.itemName,image:row.image,price:row.price,garnish:row.garnish,tax:row.tax,offers:row.offers,position:row.position,status:row.status,online:row.online,createdTime:row.createdTime};
                      json_arr.push(obj);
                }  
            
                ingredients.push(jsonIng.rows);

            });

         }
         
         $scope.SubMenuItemIngredientsData=ingredients;
         console.log($scope.SubMenuItemIngredientsData);
         $scope.SubMenuItemData= json.rows;
          //console.log($scope.SubMenuData);
      }).error(function(){  
          alert("server Error");
       });


              // var db = window.openDatabase("branbox", "1.0", "branbox Demo", 200 * 1024 * 1024);
              //db.transaction(function(tx){
                //tx.executeSql('DROP TABLE IF EXISTS ordertable');
               //   tx.executeSql('DELETE FROM ordertable');
                //  tx.executeSql('CREATE TABLE IF NOT EXISTS ordertable (id INTEGER PRIMARY KEY AUTOINCREMENT,businessId INTEGER ,menuId INTEGER, subMenuId INTEGER,itemId INTEGER, itemName TEXT, image TEXT, price TEXT, subTotal TEXT, quantity TEXT, garnish TEXT,tax TEXT,offers TEXT)');
                // tx.executeSql('INSERT OR REPLACE INTO ordertable (businessId,menuId,subMenuId,itemId,itemName,image,subTotal,quantity,garnish,tax,offers)VALUES ("23","34","6634","23","34","6634","23","34","6634","23","34")',successID);
                // function successID(){
                //      return true;
                 // }


                //});

      $scope.goback=function()
      {
        window.history.back();
      }
    $scope.minus=function(val,index,item)
    {
      console.log(item);
       
     var total=$("#quantity"+index).val();
    // alert(total);
     total--;
      if (total>=1)
      {
         
          var price=item.price *total;
         // alert(price);
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

      $scope.addToCart=function(val,json)
    {

      
       console.log(json);
      var quantity=$(val.target).val();
      var price=json.price *quantity;
      console.log(json.price);
      alert(price);
        var db = window.openDatabase("branbox", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                  tx.executeSql('SELECT * FROM ordertable where itemId="'+json.id+'"',[], function (tx, results)
                {
                  var itemLength = results.rows.length;
                  var menudatas=results.rows;
                   if(itemLength==1 )
                   {
                      tx.executeSql('UPDATE  ordertable SET quantity="'+quantity+'" ,subTotal="'+price+'"  WHERE itemId="'+json.id+'" ',successID);
                       
                   }
                   else
                   {
                     tx.executeSql('INSERT OR REPLACE INTO ordertable (businessId,menuId,subMenuId,itemId,itemName,image,price,subTotal,quantity,garnish,tax,offers)VALUES("'+json.businessId+'","'+json.menuId+'","'+json.subMenuId+'","'+json.id+'","'+json.name+'","'+json.image+'","'+json.price+'","'+price+'","'+quantity+'","'+json.garnish+'","'+json.tax+'","'+json.offers+'")',successID);
                     
                    
                   }
                 
                });
                  function successID(){
                      return true;
                  }

                  
              });
      }


})

.controller('AddToCartController', function($scope,$http,$location) {


     $scope.goback=function()
      {
        window.history.back();
      }

})















































