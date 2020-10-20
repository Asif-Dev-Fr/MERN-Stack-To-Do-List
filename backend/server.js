const express = require('express');
const cors = require('cors');
const moongoose = require('mongoose');
const Todo = require('./models/Todo');

moongoose.connect('mongodb://127.0.0.1:27017/todos', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

moongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
})

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json);

app.get('/', (req, res) => {
    Todo.find((err, todo)=> {
        if(err) {
            console.log(err)
        } else {
            res.json(todo);
        }
    })
});

app.post('/create', (req,res) => {
    const todo = new Todo(req.body); 
    todo
    .save()
    .then((todo) => {
        res.json(todo);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
});

app.get("/:id", (req,res) =>{
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
        res.json(todo);
    });
});

app.listen(PORT, () => {
    console.log('Server is running on port : ' + PORT);
});