(function() {
  'use strict';

  angular.module('teaShop.shop')
    .filter('decimal', decimal);

  function decimal() {
    return function(input) {
      return input / 100;
    }
  }
})();