var express = require("express");
const PORT = process.env.PORT || 80
var app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs");

app.get('/', (req, res) => res.render('pages/index'));

app.get("/home", (req,res) => {
  var params = {username: req.query.name};

  res.render("home",params);
});

app.get("/math", (req,res) => {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  var result = num1 + num2;
  var params = {result: result};

  res.render("result",params);
});

app.get("/math_service", (req,res) => {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  var result = {result: num1 + num2};

  res.writeHead(200,{"Content-type": "application/json"});
  res.write(JSON.stringify(result));
});

app.get("/getRate", (req, res) => {
  var mailtype = req.query.mailtype;
  var weight = req.query.weight;
  var prices = require("./public/prices.json");
  var price = prices[mailtype][weight];
  var types = require("./public/mailtype.json");
  var type = types[mailtype];
  var params = {weight:weight, type:type, price:price};
  res.render("prove09-result", params);
});

app.listen(PORT, function(){console.log("the server is up");});
