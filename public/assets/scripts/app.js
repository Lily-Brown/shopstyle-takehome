console.log('Assets connected.');

// App
angular
  .module('shopStyleApp', [])
  .controller('ShopStyleController', ShopStyleController);

// Controller
ShopStyleController.$inject = ['$http'];
function ShopStyleController($http) { 
  var vm = this;
  vm.data;
  console.log('hi');
  $http({
    method: 'GET',
    url: 'https://api.viki.io/v4/search.json?c=b&per_page=5&with_people=true&with_paywall=1&app=100266a&t=1440586215'
  }).then(function successCallback(response) {
    vm.data = response.data;
    console.log('data:',vm.data);
    $('#change-me').html('nope');
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
}
