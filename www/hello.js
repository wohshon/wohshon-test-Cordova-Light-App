document.getElementById('say_hello').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
  $fh.cloud(
      {
        path: 'hello',
        headers: {
          authorization: "secretz"
        },
        data: {
          hello: document.getElementById('hello_to').value
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p>" + res.msg + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};