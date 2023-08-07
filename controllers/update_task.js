const taskModel = require('../models/taskModel');

module.exports = async (req, res, next) => {
    // res.send('updating task with id')
    const taskId = req.params.taskId;
    const { title, completed } = req.body;

    try {
        const isCompleted = completed === 'on';

        const updatedTask = await taskModel.findByIdAndUpdate(taskId, { title, completed: isCompleted }, { new: true });
        console.log(`Updated task with ID: ${taskId}`);
        res.redirect('/tasks');
    }
    catch (err) {
        console.log(err);
    }
}