(function() {
  'use strict';

  angular.module('teaShop.shop')
    .directive('tsTeaDetails', tsTeaDetails);

  function tsTeaDetails() {
    return {
      templateUrl: '/views/shop/tea-details.html',
      scope: {
        tea: '=teaData'
      }
    };
  }
})();