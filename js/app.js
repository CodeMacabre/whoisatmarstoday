// Read JSON data file
let requestURL = './js/data.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

// Parse JSON once file is loaded
request.onload = function() {
  let json = request.response;
  let app = new Vue({
    el: '#app',
    data: {
      objects: json
    }
  });
}