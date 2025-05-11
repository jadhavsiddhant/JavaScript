// api-fetch.js
fetch('https://api.agify.io?name=john')
  .then(response => response.json())
  .then(data => console.log(data));
