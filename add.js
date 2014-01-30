#!/usr/bin/env node

var request = require("request")
    note = "Buy cheese and bread for breakfast.";

request({
  url: "http://todo9.apiary.io/notes",
  body: JSON.stringify({title: note}),
  headers: {"Content-Type": "application/json"},
  method: "POST"
}, function (error, response, body) {
  console.log("Status", response.statusCode);
  console.log("Headers", JSON.stringify(response.headers));
  console.log("Response received", body);
});

