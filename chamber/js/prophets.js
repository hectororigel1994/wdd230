const requestURL = '/chamber/js/prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  });

  const prophets = jsonObject['prophets'];

  document.getElementById('div').innerHTML= '<h1>(${requestURL.lenght})</h1>'