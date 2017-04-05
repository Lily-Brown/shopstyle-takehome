console.log('Assets connected.');

// Change event when typing in #query-input
var onload = function() {
  var e = document.getElementById('query-input');
  e.oninput = search;
  e.onpropertychange = e.oninput;
};

// Search with query value
var search = function() {
  var query = $('#query-input')[0].value;
  var queryString = '?c=' + query + '&per_page=5&with_people=true&with_paywall=1&app=100266a&t=1440586215';
  console.log('queryString',queryString);
  $.ajax({
    url: 'https://api.viki.io/v4/search.json' + queryString,
    success: function successCallback(response) {
      var data = response;
      displayData(data);
      console.log(data);
    },
    error: function errorCallback(response) {
    console.log('There was an error getting the data', response);
    }
  });
}

var displayData = function(data) {
  
}