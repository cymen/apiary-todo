#!/usr/bin/env node

var request = require("request"),
    config = require('./config.json'),
    note = "Buy cheese and bread for breakfast.";

request({
  url: "http://" + config.host + "/notes",
  body: JSON.stringify({title: note}),
  headers: {"Content-Type": "application/json"},
  method: "POST"
}, function (error, response, body) {
  console.log("Status", response.statusCode);
  console.log("Headers", JSON.stringify(response.headers));
  console.log("Response received", body);
});

