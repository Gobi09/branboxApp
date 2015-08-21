angular.module('starter', ['ionic', 'ngRoute', 'starter.controllers', 'starter.services'])

.config(['$routeProvider','$stateProvider',
         function($routeProvider,$stateProvider) {

 
  $routeProvider
    .when('/dashboard',
        {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashCtrl'
        })
       .when('/menu',
        {
            templateUrl: 'templates/menu.html',
            controller: 'MenuController'
        })
       .when('/subMenu/=:id',
        {
            templateUrl: 'templates/subMenu.html',
            controller: 'SubMenuController'
        })
       .when('/items/=:menuId=:subMenuId',
        {
            templateUrl: 'templates/items.html',
            controller: 'SubMenuItemController'
        })

      .when('/addTocart',
        {
            templateUrl: 'templates/addTocart.html',
            controller: 'AddToCartController'
        })

    .when('/contactForm',
        {
            templateUrl: 'templates/contactForm.html',
            controller: 'contactCtrl'
        })
    .when('/location',
        {
            templateUrl: 'templates/location.html',
            controller: 'locationCtrl'
        })
    .when('/myAccount',
        {
            templateUrl: 'templates/myAccount.html',
            
        })
    .when('/login',
        {
            templateUrl: 'templates/login.html',
            controller: 'DashCtrl'
        })

    .when('/register',
        {
            templateUrl: 'templates/register.html',
            controller: 'DashCtrl'
        })
    .when('/latestOffers',
        {
            templateUrl: 'templates/latestOffer.html',
            //controller: 'DashCtrl'
        })
    .when('/components',
        {
            templateUrl: 'templates/components.html',
            controller: 'DashCtrl'
        })
    .when('/gallery',
        {
            templateUrl: 'templates/gallery.html',
            controller: 'gallery'
        })
    .when('/aboutUs',
        {
            templateUrl: 'templates/aboutUs.html',
            controller: 'aboutUs'
        })
    .otherwise('/dashboard');

}]);

