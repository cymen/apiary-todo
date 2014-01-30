#!/usr/bin/env node

var request = require("request");

request({
  url: "http://todo9.apiary.io/notes",
  method: "GET"
}, function (error, response, body) {
  var allNotes = JSON.parse(body);
  allNotes.forEach(function(note) {
      console.log(note.id + ': ' + note.title);
  });
});
