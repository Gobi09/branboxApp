angular.module('starter', ['ionic', 'ngRoute', 'starter.controllers', 'starter.services'])

.config(['$routeProvider','$stateProvider',
         function($routeProvider,$stateProvider) {

     
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

