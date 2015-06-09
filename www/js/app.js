// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).controller('studentController', function($scope, $http){
                var url = "js/data.json";
                $http.get(url).success(function(response){
                  $scope.students = response;
                });
                
}).controller('studentController_profile', function($scope, $http){
                var url = "js/datajson2.json";
                $http.get(url).success(function(response){
                  $scope.profiles = response.profile;
                });
});
