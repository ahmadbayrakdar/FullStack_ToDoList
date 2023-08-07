const TaskModel = require('../models/taskModel');

module.exports = (req, res, next) => {
    // res.send('create new task');
    console.log(req.body);
    res.redirect('/tasks');
    const taskInstance = new TaskModel({
        title: req.body.title,
        completed: false
    });
    taskInstance.save().then(savedTask => {
        console.log(savedTask);
    })
        .catch(error => {
            console.log(error);
        });
}