function getResultJson()
{
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.status == 200)
    document.getElementById('result').innerHTML = "JSON: " + this.responseText;
  };
  xhttp.open("GET","/math_service?num1=" + num1 + "&num2=" + num2, true);
  xhttp.send();
}
