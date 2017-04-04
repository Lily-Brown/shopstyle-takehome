console.log('Assets connected.');

$.ajax({
  url: 'https://api.viki.io/v4/search.json?c=b&per_page=5&with_people=true&with_paywall=1&app=100266a&t=1440586215',
  success: function successCallback(response) {
    var items = response;
    console.log('data:',response);
  },
  error: function errorCallback(response) {
    console.log('There was an error getting the data', response);
  }
});