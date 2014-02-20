# todo server

    var client,
        request,
        baseUrl,
        todo;

## transaction

    request = require('request-json');
    baseUrl = 'http://localhost:3000/';
    client = request.newClient(baseUrl);

### can connect to server

    client.get('notes/1', function (error, response, body) {
        if (error) {
          console.log('ERROR: Could not connect to server!');
        }

        expect(error).toBe(null);

        done();
    });

### create a todo

    var data = {
      title: "This is my title"
    };

    client.post('notes/', data, function (error, response, fetchedTodo) {
        todo = fetchedTodo;

        expect(todo.id).toBeDefined();
        expect(todo.title).toBe(data.title);

        done();
    });

### todo should match

    client.get('notes/' + todo.id, function (error, response, fetchedTodo) {

        expect(response.statusCode).toBe(200);
        expect(fetchedTodo.id).toEqual(todo.id);
        expect(fetchedTodo.title).toEqual("This is my title");

        done();
    });

### todo can be deleted

    client.del('notes/' + todo.id, function (error, response) {

        expect(response.statusCode).toBe(200);

And we can ask for the todo we just deleted to verify it is in fact
deleted:

        client.get('notes/' + todo.id, function (error, response) {

            expect(response.statusCode).toBe(404);

            done();
        });
    });

### DELETE for todo that does not exist is 404

    client.del('notes/' + todo.id, function (error, response) {

        expect(response.statusCode).toBe(404);

        done();
    });
