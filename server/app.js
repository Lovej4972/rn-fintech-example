const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.post('/addAccount', function(req, res) {
  const email = req.body.email;
  const account = req.body.account;
  console.log("Add account", account.name)
  res.send("Server action: Added new account!!" + account.name);
});
app.post('/updateAccount', function(req, res) {
  const email = req.body.email;
  const account = req.body.account;
  console.log("Update account", account.name)
  res.send("Server action: Updated account!!" + account.name);
});
app.post('/removeAccount', function(req, res) {
  const email = req.body.email;
  const account = req.body.account;
  console.log("Remove account", account.name)
  res.send("Server action: Removed account!!" + account.name);
});
app.listen(PORT, function () {
  console.log('Example app listening on port:', PORT)
})
