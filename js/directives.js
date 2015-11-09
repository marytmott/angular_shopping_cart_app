app.directive('tsTeaDetails', function() {
  return {
    templateUrl: '/partials/tea-details.html',
    scope: {
      tea: '=teaData'
    }
  };
});
app.directive('tsInfoCart', function() {
  return {
    templateUrl: '/partials/tea-info-cart.html',
    scope: {
      tea: '=teaData'
    }
  };
});