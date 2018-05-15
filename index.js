var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

var todo = require('./routes/todos');

app.use('/todo', todo)

app.listen(3000, () => console.log('Example app listening on port 3000!'))