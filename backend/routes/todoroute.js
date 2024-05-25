const router = require('express').Router();
let Todo = require('../models/todo.model');

router.route('/').get((req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const description = req.body.description;
    const status = req.body.status;

    const newTodo = new Todo({
        description,
        status,
    });

    newTodo.save()
        .then(() => res.json('Todo added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('Todo deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => {
            todo.description = req.body.description;
            todo.status = req.body.status;

            todo.save()
                .then(() => res.json('Todo updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
