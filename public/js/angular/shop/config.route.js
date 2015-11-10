(function() {
  'use strict';

  angular.module('teaShop.shop')
    .config(configRoutes);

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/shop/shop.html',
        controller: 'ShopController',
        controllerAs: 'vm'
      })
      .when('/shopping-bag', {
        templateUrl: '/views/shop/shopping-bag.html',
        controller: 'ShoppingBagController'
      });
  }
})();

