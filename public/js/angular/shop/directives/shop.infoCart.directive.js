(function() {
  'use strict';

  angular.module('teaShop.shop')
    .directive('tsInfoCart', tsInfoCart);

  function tsInfoCart() {
    return {
      templateUrl: '/views/shop/tea-info-cart.html',
      scope: {
        tea: '=teaData'
      }
    };
  }
})();