angular.module('starter.controllers', ["oc.lazyLoad",'ngRoute','ngSanitize'])



// .controller('mainViewController', function($scope,$ocLazyLoad) {

//      

//   })

// .controller('DashCtrl', function($scope,$ocLazyLoad) {

  
//   })
.controller('contactCtrl', function($scope,$http) {

    $("#sidebar").removeClass("toggled");
  $("#menu-trigger").removeClass("open");
  
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

.controller('locationCtrl', function($scope, $http) {
    $("#sidebar").removeClass("toggled");
  $("#menu-trigger").removeClass("open");
  $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/branbox.php',{'branboxVariable':'location', businessId:'1'},{headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'} }).success(function(data){
    $scope.initialize(data);
  }).error(function(){
      $scope.data = "error DataBase";
  });
  //initialize map
  $scope.initialize = function(data) {
    var infowindow = new google.maps.InfoWindow()
    var mapOptions = {
        center: new google.maps.LatLng(data[0]['latitude'], data[0]['longitude']),
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("locationMap"), mapOptions);
    for (var i = 0; i < data.length; i++) {
      var image = 'img/logo.jpg';
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        position: new google.maps.LatLng (data[i]['latitude'], data[i]['longitude'])
      });
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


//author Pravinkumar on 20/8/2015
.controller('aboutUs', function($scope,$http) {
    $("#sidebar").removeClass("toggled");
  $("#menu-trigger").removeClass("open");
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
    $("#sidebar").removeClass("toggled");
  $("#menu-trigger").removeClass("open");
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

    $("#sidebar").removeClass("toggled");
  $("#menu-trigger").removeClass("open");
   $scope.useremail= localStorage.getItem("email");
      $scope.userName= localStorage.getItem("userName");
       console.log($scope.userName);
      // alert($scope.userName);
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
    $("#sidebar").removeClass("toggled");
  $("#menu-trigger").removeClass("open");


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

      $scope.goback=function()
      {
        window.history.back();
      }

})
.controller('SubMenuItemController', function($scope,$http,$location) {
  $("#sidebar").removeClass("toggled");
  $("#menu-trigger").removeClass("open");

  $scope.useremail= localStorage.getItem("email");
  $scope.userName= localStorage.getItem("userName");
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
                //alert(jsonIng.rows.length);
                for(var i = 0; i < jsonIng.rows.length; i++) {
                    var row = jsonIng.rows[i];
                    var obj = {id:row.id,businessId: row.businessId,menuId:row.menuId,subMenuId:row.subMenuId,itemId:row.itemId,ingredients:row.ingredients,price:row.price,category:row.category};
                   //console.log(obj);
                    ingredients.push(obj);
                }  

                //ingredients.push(jsonIng.rows);

            });

         }
         
         $scope.SubMenuItemIngredientsData=ingredients;
         //console.log($scope.SubMenuItemIngredientsData);
         $scope.SubMenuItemData= json.rows;
          //console.log($scope.SubMenuItemData);
      }).error(function(){  
          alert("server Error");
       });


              // var db = window.openDatabase("branboxnew", "1.0", "branbox Demo", 200 * 1024 * 1024);
              // db.transaction(function(tx){
              //  // tx.executeSql('DROP TABLE IF EXISTS ordertable');
              //     tx.executeSql('DELETE FROM ordertable');
              //     tx.executeSql('CREATE TABLE IF NOT EXISTS orderitems (id INTEGER PRIMARY KEY AUTOINCREMENT,businessId INTEGER ,menuId INTEGER, subMenuId INTEGER,itemId INTEGER, itemName TEXT, image TEXT, price TEXT, subTotal TEXT, quantity TEXT, garnish TEXT,tax TEXT,offers TEXT)');

              //     tx.executeSql('CREATE TABLE IF NOT EXISTS orderingredients (id INTEGER PRIMARY KEY AUTOINCREMENT,businessId INTEGER ,menuId INTEGER, subMenuId INTEGER,itemId INTEGER, ingId INTEGER, ingredientsYN TEXT, extras TEXT)');                  
              //   //tx.executeSql('INSERT OR REPLACE INTO ordertable (businessId,menuId,subMenuId,itemId,itemName,image,subTotal,quantity,garnish,tax,offers)VALUES ("23","34","6634","23","34","6634","23","34","6634","23","34")',successID);
              //    function successID(){
              //        return true;
              //    }

              //   });
               
      $scope.goback=function()
      {
        //alert();
        window.history.back();
      }

      // $scope.goToCart=function()
      // {
      //    $location.path('/addTocart');
      // }

    $scope.minus=function(val,index,item)
    {
      console.log(item);
      // alert();
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

      $scope.addToCart=function(val,index,json)
    {

                var nFrom = $(this).attr('data-from');
                var nAlign = $(this).attr('data-align');
                var nIcons = $(this).attr('data-icon');
                var nType = $(this).attr('data-type');
                var nAnimIn = $(this).attr('data-animation-in');
                var nAnimOut = $(this).attr('data-animation-out');
                
    //             var currentdate = new Date(); 
    // var datetime =currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear()+ "-"   
    //               + currentdate.getHours() + ":"  
    //               + currentdate.getMinutes();
               // alert(datetime);

       //console.log(json);
           //var $row  = jQuery(this).parents('.order');
        var quantity= $("#quantity"+index).val();
      //var quantity=$(val.target).val();
      var price=json.price * quantity;
      //alert(quantity);
      console.log(json);
      //alert(price);
       var userid= localStorage.getItem("id");
       console.log(userid);
        var db = window.openDatabase("branboxnew", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                  tx.executeSql('SELECT * FROM orderitems where itemId="'+json.id+'"',[], function (tx, results)
                {
                  var itemLength = results.rows.length;
                  console.log(itemLength);
                  var menudatas=results.resultsows;
                   if(itemLength==1 )
                   {
                      tx.executeSql('UPDATE  orderitems SET quantity="'+quantity+'" ,subTotal="'+price+'"  WHERE itemId="'+json.id+'" ',successID);
                       
                      notify(nFrom, nAlign, nIcons, nType, nAnimIn, nAnimOut);
                   }
                   else
                   {
                     tx.executeSql('INSERT OR REPLACE INTO orderitems (businessId,menuId,subMenuId,itemId,userId,itemName,image,price,subTotal,quantity,tax,offers)VALUES("'+json.businessId+'","'+json.menuId+'","'+json.subMenuId+'","'+json.id+'","'+userid+'","'+json.name+'","'+json.image+'","'+json.price+'","'+price+'","'+quantity+'","'+json.tax+'","'+json.offers+'")',successID);
                     
                     notify(nFrom, nAlign, nIcons, nType, nAnimIn, nAnimOut);
                    
                   }
                 
                });
                  function successID(){
                      return true;
                  }

                  
              });


          
      };

       $scope.savecYesno=function(event,json,index)
       {
          var data= $(event.target).val();
          if(data=="NO")
          {
            $(event.target).val("YES");
            //alert(data);
          } 
          else
          {
            $(event.target).val("NO");
            //alert(data);
          }
          var db = window.openDatabase("branboxnew", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                  tx.executeSql('SELECT * FROM orderingredients where ingId="'+json.id+'"',[], function (tx, results)
                {
                  var itemLength = results.rows.length;
                  var menudatas=results.rows;
                   if(itemLength==1 )
                   {
                      tx.executeSql('UPDATE  orderingredients SET ingredientsYN="'+data+'" WHERE ingId="'+json.id+'" ',successID);
                       
                   }
                   else
                   {
                     tx.executeSql('INSERT OR REPLACE INTO orderingredients (businessId,menuId,subMenuId,itemId,ingId,ingredientsYN,extras)VALUES("'+json.businessId+'","'+json.menuId+'","'+json.subMenuId+'","'+json.itemId+'","'+json.id+'","'+data+'","")',successID);
                     
                   }
                 
                });
                  function successID(){
                      return true;
                  }

            
       });
     }

       $scope.saveExtra=function(event,json,index)
       {
          var data= $(event.target).val();
          //alert(json.id);

          var db = window.openDatabase("branboxnew", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                  tx.executeSql('SELECT * FROM orderingredients where ingId="'+json.id+'"',[], function (tx, results)
                {
                  var itemLength = results.rows.length;
                  //alert(itemLength);
                  var menudatas=results.rows;
                   if(itemLength==1 )
                   {
                      tx.executeSql('UPDATE  orderingredients SET extras="'+data+'" WHERE ingId="'+json.id+'" ',successID);
                       
                   }
                   else
                   {
                     tx.executeSql('INSERT OR REPLACE INTO orderingredients (businessId,menuId,subMenuId,itemId,ingId,ingredientsYN,extras)VALUES("'+json.businessId+'","'+json.menuId+'","'+json.subMenuId+'","'+json.itemId+'","'+json.id+'","YES","'+data+'")',successID);
                     
                    
                   }
                 
                });
                  function successID(){
                      return true;
                  }
              });
            }


            function notify(from, align, icon, type, animIn, animOut){
                $.growl({
                    icon: icon,
                    //title: 'Item',
                    message: 'Item added in the Cart',
                    url: ''
                },{
                        element: 'body',
                        type: "inverse",
                        allow_dismiss: true,
                        placement: {
                                from: from,
                                align: align
                        },
                        offset: {
                            x: 20,
                            y: 85
                        },
                        spacing: 10,
                        z_index: 1031,
                        delay: 3000,
                        timer: 500,
                        url_target: '_blank',
                        mouse_over: false,
                        animate: {
                                enter: animIn,
                                exit: animOut
                        },
                        icon_type: 'class',
                        template: '<div data-growl="container" class="alert" role="alert">' +
                                        '<button type="button" class="close" data-growl="dismiss">' +
                                            '<span aria-hidden="true">&times;</span>' +
                                            '<span class="sr-only">Close</span>' +
                                        '</button>' +
                                        '<span data-growl="icon"></span>' +
                                        '<span data-growl="title"></span>' +
                                        '<span data-growl="message"></span>' +
                                        '<a href="#" data-growl="url"></a>' +
                                    '</div>'
                });
            };






            
           



})

.controller('AddToCartCtrl', function($scope,$http,$location) {

  //alert("data");
  $scope.useremail= localStorage.getItem("email");
  $scope.userName= localStorage.getItem("userName");
  $scope.userid= localStorage.getItem("id");
  //alert($scope.userName);
    $scope.totalAmount="";
     $scope.FinalOrderData="";
     //$scope.OrderedItems="";
     var json_arr =  [];  
      $("#orderdata").hide();
     var db = window.openDatabase("branboxnew", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                  tx.executeSql('SELECT * FROM orderitems',[], function (tx, results)
                  {

                    var itemLength = results.rows.length;
                    //alert(itemLength+"length");
                    //console.log(results.rows.item(0));

                    var menudatas=results.rows;
                    for(var i = 0; i < itemLength; i++) 
                    {
                        var row = menudatas.item(i);
                        var obj = {businessId:row.businessId,menuId:row.menuId,subMenuId:row.subMenuId,itemId:row.itemId,userId:row.userId,itemName:row.itemName,image:row.image,price:row.price,quantity:row.quantity,subTotal:row.subTotal};
                        json_arr.push(obj);
                        //console.log(json_arr);
                        //alert(row.menuId);
                    }  
                    $scope.OrderedItems=json_arr;
                    //alert(json_arr.menuId);
                    console.log( $scope.OrderedItems);
                  });
              });
        $scope.showfun=function(OrderedItems){

            $("#orderdata").show();
        }
        $scope.hidefun=function(OrderedItems){

            $("#orderdata").hide();
        }
        $scope.removeOrder = function(index,order) {
            var db = window.openDatabase("branboxnew", "1.0", "branbox Demo", 200 * 1024 * 1024);
             db.transaction(function(tx){
                  tx.executeSql('DELETE FROM orderitems where itemId="'+order.itemId+'"',successID)
                 
              });
              function successID(){
                      return true;
                  }
          $scope.OrderedItems.splice(index,1);
           //alert(order.itemId);
        };

        $scope.getTotal = function(){
          //alert("call from");
            var total = 0;
            var length= $scope.OrderedItems.length;

            for(var i = 0; i < length; i++){
                var product = $scope.OrderedItems[i];
                total += parseInt(product.subTotal);
                //alert(product.subTotal);
            }
            $scope.totalAmount=total;
            if (total==0) {
              $("#food").hide();
            };
            return total;
        };

        $scope.getsubtotal = function(val,index,order){

          console.log($scope.OrderedItems);
            //alert();
            // var quantity=$("#quantity").val();
          var quantity=$(val.target).val() ;
          if(quantity=="" || quantity=="0")
          {
            
              $("#quantity").val(0);
              $("#subTotal").val(0);  
          }
          else
          {
             //console.log(order[0]);
            var data= angular.copy($scope.OrderedItems);
            console.log(data);
            var price=data[index].price;
            var total = quantity*price;
           // alert(data[index].menuId);
              //alert($scope.OrderedItems[index].itemId);
            var db = window.openDatabase("branboxnew", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                  tx.executeSql('SELECT * FROM orderitems where itemId="'+data[index].itemId+'"',[], function (tx, results)
                {
                  var itemLength = results.rows.length;
                   if(itemLength==1 )
                   {
                      tx.executeSql('UPDATE  orderitems SET quantity="'+quantity+'" ,subTotal="'+total+'"  WHERE itemId="'+data[index].itemId+'" ',successID);
                    //alert("updated");
                    }
                });
                  function successID(){
                      return true;
                  }

                });
            $scope.OrderedItems.splice(index,1,{
              businessId:data[index].businessId,
              itemId:data[index].itemId,
              subMenuId:data[index].subMenuId,
              menuId:data[index].menuId,
              userId:data[index].userId,
              itemName:data[index].itemName,
              price:data[index].price,
              image:data[index].image,
              quantity: quantity,
              subTotal: total}); 
           // console.log($scope.OrderedItem);
            $scope.getTotal();
          }
        };

        $scope.getFood=function(orderData){
          var json_arr =  []; 
          var finaldata=[];
          
          var db = window.openDatabase("branboxnew", "1.0", "branbox Demo", 200 * 1024 * 1024);
              db.transaction(function(tx){
                  tx.executeSql('SELECT * FROM orderingredients',[], function (tx, results)
                {
                  var itemLength = results.rows.length;
                  var ingredientsDatas=results.rows;
                for(var i = 0; i < itemLength; i++) {
                    var row = ingredientsDatas.item(i);
                    var obj = {id:row.id,businessId:row.businessId,menuId:row.menuId,subMenuId:row.subMenuId,itemId:row.itemId,ingId:row.ingId,ingYN:row.ingredientsYN,notes:row.extras};
                    json_arr.push(obj);
                }  
                  $scope.additionalData=json_arr;

                });
                
              });

                var date= localStorage.getItem("delvDate");
                var time= localStorage.getItem("delvTime");
                
                $scope.FinalOrderData=orderData;
                
                setTimeout(function(){  
                  finaldata.push($scope.FinalOrderData);
                  finaldata.push($scope.additionalData);
                  if(date!="" && time!="")
                  {
                    alert();
                    $scope.TimedDelevery={date:date,time:time};
                    finaldata.push($scope.TimedDelevery);
                  }
                 
                  console.log(finaldata);
                  $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ordertableData.php',finaldata, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
                    .success(function (json) {
                     
                      console.log(json);
                      if(json.data=="success")
                      {
                        localStorage.setItem("delvDate","");
                        localStorage.setItem("delvTime","");
                         swal({
                            title: "Order Send Successfully!",   
                            text: "Food Will Reach Soon",   
                            timer: 2000,   
                            showConfirmButton: false 
                        });

                              var db = window.openDatabase("branboxnew", "1.0", "branbox New", 200 * 1024 * 1024);
                                  db.transaction(function(tx){
                                        tx.executeSql('DELETE FROM orderitems');
                                       tx.executeSql('DELETE FROM orderingredients');                                      
                                      localStorage.setItem("dbclear", '1');
                                  });
                          //window.location="mainpage.html";
                         $location.path('/menu');
                      }
                     console.log(json);
                    }).error(function(){  
                        alert("server Error");
                     });
                  }, 1000);
                    

                


        };

     $scope.goback=function()
      {
        window.history.back();
      }


       // $('#food').click(function(){
       //          swal({   
       //              title: "Conformation",   
       //              text: " item order completed!",   
       //              type: "warning",   
       //              showCancelButton: true,   
       //              confirmButtonColor: "#04bb1c",   
       //              confirmButtonText: "Yes, Ordered!",   
       //              cancelButtonText: "No, cancel!",   
       //              closeOnConfirm: false,   
       //              closeOnCancel: false 
       //          }, function(isConfirm){   
       //              if (isConfirm) {  

       //                  swal("Send!", "Order send Successfully :)", "success");   



       //              } else {     
       //                  swal("Cancelled", "Order canceled :(", "error");   
       //              } 
       //          });
       //      });



})

//register form (ezhil)
.controller('registerForm', function($scope,$http,$location) {  
    $("#sidebar").removeClass("toggled");
  $("#menu-trigger").removeClass("open");
  $scope.insertForm=function()
  {
    // for submitting form
    $scope.submitted = false;
   
      if ($scope.newUser.$valid) 
      {
        // Submit as normal
      } else {
        $scope.newUser.submitted = true;
      }
    
    // for submitting form
    var fname = $("#fname").val(); 
    var password = $("#password").val();
    var gender = $("#gender").val();
    var dob = $("#dob").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var address1 = $("#address1").val();
    var address2 = $("#address2").val();
    var country = $("#country").val();
    var state = $("#state").val();
    var city = $("#city").val();
    var bussinessId="1";    
    var code = $("#postalCode").val();
    //alert(gender); 

    $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/registerUser.php',{busId:bussinessId,fname:fname,password:password,gender:gender,dob:dob,email:email,mobile:mobile,address1:address1,address2:address2,country:country,state:state,city:city,code:code}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
    .success(function (response) {
       
      if(response!==null)
      {
        //$location.path('templates/menu.html');
        //alert('success');
        $location.path('/menu');

      }else{
        alert('fail');
      }
    }).error(function(){  
        alert("server Error");
      });

  }

})

//login authentication (ezhil)
.controller('authentication', function($scope,$http,$location) {  
    $("#sidebar").removeClass("toggled");
  $("#menu-trigger").removeClass("open");
  $scope.loginAuthentication=function()
  {
    
    var password = $("#password").val();    
    var email = $("#email").val();  
    // alert(password);
    // alert(email);
    // exit();  

    $http.post('http://www.appnlogic.com/branboxAppAdmin/branboxAdminUi/ajaxLogin.php',{password:password,email:email}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
    .success(function (json) {
      var ajaxlength = json.length;
      // alert(ajaxlength);
      //console.log(json);
      if(ajaxlength==1)
      {
          var id = json[0]['id'];
          var email = json[0]['email'];
          var userName  = json[0]['userName'];
          var address1 = json[0]['address1'];
          var address2 = json[0]['address2'];
          var city = json[0]['city'];
          var state = json[0]['state'];
          var country = json[0]['country'];
          var postalCode = json[0]['postalCode'];
          localStorage.setItem("email", email);
          localStorage.setItem("id", id);
          localStorage.setItem("businessId", 1);
          localStorage.setItem("userName",userName );
          localStorage.setItem("address1", address1);
          localStorage.setItem("address2", address2);
          localStorage.setItem("city",city );
          localStorage.setItem("state",state );
          localStorage.setItem("country", country);
          localStorage.setItem("postalCode",postalCode );
           window.location="index.html";
           // $location.path('/menu');
      }
     
        if(ajaxlength == 1){          
         
        }
        else
        {
          $location.path('/login');
          $("#password").val("");
          $("#email").val("");
        }
        $scope.SubMenuData= json.rows;

       
      // if(response!==null)
      // {        
      //   $location.path('/menu');
      // }else{
      //   alert('fail');
      // }
    }).error(function(){  
        alert("server Error");
      });
  }

})
  
  .controller('latestOfferController', function($scope,$http,$location) {  

      $("#sidebar").removeClass("toggled");
      $("#menu-trigger").removeClass("open");

  })
.controller('timeDelivery', function($scope,$http) {  
      $("#sidebar").removeClass("toggled");
      $("#menu-trigger").removeClass("open");
      $scope.save = function(){
         var delvDate = $('#deliveryDate').val();           
         var delvTime = $('#deliveryTime').val();  

         if(delvDate=="")
          {
               swal({   
                                  title: "Please Give Valid Date!! ",   
                                  text: "It is Required!",   
                                  timer: 2000,   
                                  showConfirmButton: false 
                              });
               return false
          }
         
          if(delvTime=="")
          {
               swal({   
                                  title: "Please Give Time for Delivery.",   
                                  text: " It is Required!",   
                                  timer: 2000,   
                                  showConfirmButton: false 
                              });
               return false
          }
        localStorage.setItem("delvDate", delvDate);
        localStorage.setItem("delvTime", delvTime);
        window.location="index.html";
      }      

  })




//check Login User data
