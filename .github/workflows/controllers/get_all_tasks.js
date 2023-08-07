const TaskModel = require('../models/taskModel');

module.exports = async (req, res, next) => {
    // res.send('get all tasks')
    try {
        const tasks = await TaskModel.find();
        // res.json(tasks);
        res.render('TaskList', { title: 'TaskList', message: 'My To Do List', taskItems: tasks });
        console.log(tasks);
    }
    catch (err) {
        console.log('Error in get all tasks', err);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}