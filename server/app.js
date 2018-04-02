const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// add your code here


let mockData = [
  {
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false
  },
  {
    todoItemId: 1,
    name: 'another item',
    priority: 2,
    completed: false
  },
  {
    todoItemId: 2,
    name: 'a done item',
    priority: 1,
    completed: true
  }
];

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.status(200).send({status: 'ok'});
  })

app.get('/api/TodoItems', function (req, res) {  
    res.status(200).send(mockData);
  })

app.post('/api/TodoItems', function (req, res) {
  const newData = {
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false,
  }

  res.status(201).send(newData);

  })

app.delete('/api/TodoItems/:number', function (req, res) {
  const deleteData = {
    todoItemId: 0,
    name: 'an item',
    priority: 3,
    completed: false,
    
  }
  res.status(200).send(deleteData);

  })

app.get('/api/TodoItems/:number', function (req, res) {
  const newNumber = {
    todoItemId: 1,
    name: 'an item',
    priority: 3,
    completed: false,
  }    
  
  res.status(200).send(newNumber);
  
})

module.exports = app;

console.log(mockData);
