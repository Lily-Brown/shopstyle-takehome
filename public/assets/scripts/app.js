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
  if (query.length > 0) {
    $('#welcome-msg').hide();
    $('#no-results').hide();
    $('#filter-div').show();
    var queryString = '?c=' + query + '&per_page=5&with_people=true&with_paywall=1&app=100266a&t=1440586215';
    $.ajax({
      url: 'https://api.viki.io/v4/search.json' + queryString,
      success: function successCallback(response) {
        var data = response;
        displayData(data);
      },
      error: function errorCallback(response) {
      console.log('There was an error getting the data', response);
      }
    });
  } else {
    $('#welcome-msg').show();
    $('#filter-div').hide();
    $('#data').empty();
  }
}

// Populates page with data from query
var displayData = function(data) {
  $('#data').empty();
  var title,
      type = $('#type-select')[0].value;
  if (data.length > 0) {
    var element = '';
    for(var i=0; i<data.length; i++) {
      var episodeNumbers = '';
      switch($('#lang-select')[0].value) {
        case 'tt':
          title = data[i].tt;
          break;
        case 'te':
          title = data[i].te;
          break;
        case 'tf':
          title = data[i].tf;
          break;
        case 'tj':
          title = data[i].tj;
          break;
        default:
          title = data[i].tt;
      }
      if (title === undefined) {
        title = 'Data not available in this language.'
      }
      if (data[i].t === 'series') {
        episodeNumbers = " | <span class='episodes'>Episodes: " + data[i].e + "</span>"
      }
      if (data[i].t === type || type === 'all') {
        element = "<div class='datum'></div>" +
                    "<div class='data-photo'>" +
                      "<img src='" + data[i].i + "'>" +
                    "</div>" +
                    "<div class='data-info'>" +
                      "<span class='title'>" + title + "</span>" +
                      "<p>" +
                        "<span class='first-letter'>" + data[i].t + "</span>" +
                        episodeNumbers +
                      "</p>" +
                    "</div>" +
                  "</div>";
        $('#data').append(element);
      }
    }
  } else {
    $('#no-results').show();
  }
}
