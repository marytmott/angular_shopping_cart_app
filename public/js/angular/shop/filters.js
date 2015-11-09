app.filter('decimal', function() {
  return function(input) {
    return input / 100;
  }
});
app.filter('stockStatus', function() {
  return function(input) {
    if (input) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
});