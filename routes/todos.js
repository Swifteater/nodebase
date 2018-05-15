var express = require('express')
var router = express.Router();

var todo = require('../models/todo');

var todos = [];

todos.push(new todo('bob'));
todos.push(new todo('do something'));
todos.push(new todo('apple'));


// respond with "hello world" when a GET request is made to the homepage
// Return an list of objects
router.get('/', (req, res) => res.send(todos))
// get a specifc item
router.get('/:id', (req, res) => res.send(`hello world ${req.params['id']}`))
// Create an object
router.post('/', (req, res) => {
    var name = req.body.name;
    todos.push(new todo(name));
    res.send(todos);
});
// Update an object
router.put('/:id', (req, res) => res.send(`hello world ${req.params['id']}`))
// Delete an object
router.delete('/:name', (req, res) => {
    var index = '-1';
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].name === req.params['name']){
            index = i;
        }
    }
    if (index === -1) {
        return res.status(404).send('Not found');
    }
    todos.splice(index, 1);
    return res.send(todos);
})

module.exports = router;