var express = require('express'),
    _ = require('underscore');

var todos = [];
var addTodo = function(title) {
  var nextId = 0,
      newTodo;
  todos.map(function(todo) {
    if (todo.id > nextId) {
      nextId = todo.id;
    }
  });
  nextId += 1;
  newTodo = {id: nextId, title: title};
  todos.push(newTodo);
  console.log('Adding', newTodo);
  return newTodo;
};
var getTodo = function(id) {
  for (var i=0; i < todos.length; i++) {
    var todo = todos[i];
    if (todo.id == id) {
      return todo;
    }
  }
};
var removeTodo = function(id) {
  return todos.filter(function(todo) {
      if (todo.id != id) {
        return todo;
      }
      else {
        console.log('Deleting', todo);
      }
  });
};
var hasTodo = function(id) {
  var todoExists = !!getTodo(id);
  console.log('Has todo for', id, todoExists);
  return !!getTodo(id);
};

addTodo("Jogging in park");
addTodo("__Pick-up posters from post-office");

var app = express();
app.use(express.bodyParser());

app.get('/notes', function(req, res) {
  res
    .type('json')
    .send(todos);
});

app.post('/notes', function(req, res) {
    var title = req.body.title;

    res
      .type('json')
      .send(addTodo(title));
});

app.get('/notes/:id', function(req, res) {
    var id = req.params.id,
        todo;

    todo = getTodo(id);

    if (todo) {
      res
        .set('x-my-header', 'the value')
        .type('json')
        .send(todo);
    } else {
      res.send('Todo not found', 404);
    }
});

app.delete('/notes/:id', function(req, res) {
    var id = req.params.id;

    if (hasTodo(id)) {
      todos = removeTodo(id);
      res.send();
    } else {
      res.send('Todo not found', 404);
    }
});

app.listen(3000);
