app.factory('ShopInventory', ['$http', function($http) {
  var Inventory = {};

  Inventory.getInventory = function() {
    return $http.get('/teas.json').success(function(data) {
      return data;
    });
  };

  return Inventory;
}]);