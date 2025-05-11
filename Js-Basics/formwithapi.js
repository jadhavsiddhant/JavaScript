<!-- form-with-api.html -->
<form id="ageForm">
  <input type="text" id="username" placeholder="Enter a name" />
  <button type="submit">Get Age</button>
</form>
<pre id="result"></pre>

<script>
  document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('username').value;

    fetch(`https://api.agify.io?name=${name}`)
      .then(res => res.json())
      .then(data => {
        document.getElementById('result').textContent = JSON.stringify(data, null, 2);
      });
  });
</script>
