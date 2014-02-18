# todo server

    var request,
        baseUrl,
        todo;

## transaction

    request = require('request');
    baseUrl = 'http://localhost:3000';

### create a todo

    request({
      url: baseUrl + "/notes",
      body: JSON.stringify({title: "This is my title"}),
      headers: {"Content-Type": "application/json"},
      method: "POST"
    }, function (error, response, body) {
      todo = JSON.parse(body);

      expect(todo.id).toBeDefined();
      expect(todo.title).toBe('This is my title');

      done();
    });

### todo should match

    request({
      url: baseUrl + "/notes/" + todo.id,
      headers: {"Content-Type": "application/json"},
      method: "GET"
    }, function (error, response, body) {
      var fetchedTodo = JSON.parse(body);

      expect(response.statusCode).toBe(200);
      expect(fetchedTodo.id).toEqual(todo.id);
      expect(fetchedTodo.title).toEqual("This is my title");

      done();
    });

### todo can be deleted

    console.log('deleting');
    request({
      url: baseUrl + "/notes/" + todo.id,
      headers: {"Content-Type": "application/json"},
      method: "DELETE"
    }, function (error, response, body) {

      expect(response.statusCode).toBe(200);

And we can ask for the todo we just deleted to verify it is in fact
deleted:

      console.log('asking for todo with id: ' + todo.id);
      request({
        url: baseUrl + "/notes/" + todo.id,
        headers: {"Content-Type": "application/json"},
        method: "GET"
      }, function (error, response, body) {

        expect(response.statusCode).toBe(404);

        done();
      });
    });

### DELETE for todo that does not exist is 404

    console.log('deleting');
    request({
      url: baseUrl + "/notes/" + todo.id,
      headers: {"Content-Type": "application/json"},
      method: "DELETE"
    }, function (error, response, body) {

      expect(response.statusCode).toBe(404);

      done();
    });
