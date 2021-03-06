function updateWeightLimits(value)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
      var weight_select = document.getElementById("weight");
      var prices = JSON.parse(this.responseText);
      var options = "";
      for (var key in prices[value])
      {
        options += "<option>" + key + "</option>";
      }
      weight_select.innerHTML = options;

    }
  };
  xhttp.open("GET","prices.json");
  xhttp.send();



}

function getPrices()
{

}
