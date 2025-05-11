var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.agify.io?name=jane');
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};
xhr.send();
