(function() {
  'use strict';

  angular.module('teaShop', [
    'ngRoute',
    'teaShop.shop'
  ])
  .config(configRoutes);

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider) {
    $routeProvider
      .otherwise({redirectTo: '/'});
  }
})();






// var app = angular.module('shoppingCart', ['ngRoute']);
// app.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'partials/shop.html',
//       controller: 'ShopController'
//     })
//     .when('/shopping-bag', {
//       templateUrl: 'partials/shoppingBag.html',
//       controller: 'ShoppingBagController'
//     })
//     .otherwise({redirectTo: '/'});
// }]);

//local storage for shopping bag contents???