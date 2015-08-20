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
           // controller: 'DashCtrl'
        })
       .when('/subMenu',
        {
            templateUrl: 'templates/subMenu.html',
           // controller: 'DashCtrl'
        })
       .when('/items',
        {
            templateUrl: 'templates/items.html',
           // controller: 'DashCtrl'
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
            controller: 'DashCtrl'
        })
    .when('/aboutUs',
        {
            templateUrl: 'templates/aboutUs.html',
            controller: 'DashCtrl'
        })
    .otherwise('/dashboard');

}]);

