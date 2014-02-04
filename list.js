#!/usr/bin/env node

var request = require("request"),
    config = require('./config.json');

request({
  url: "http://" + config.host + "/notes",
  method: "GET"
}, function (error, response, body) {
  var allNotes = JSON.parse(body);
  allNotes.forEach(function(note) {
      console.log(note.id + ': ' + note.title);
  });
});
