const TaskModel = require('../models/taskModel');

module.exports = async (req, res, next) => {
    const taskId = req.params.taskId;
    // res.send('delete task with id');
    try {
        const deletedTask = await TaskModel.findByIdAndDelete(taskId);
        console.log(`Deleted task with ID: ${taskId}`);
        res.redirect('/tasks');
    }
    catch (err) {
        console.log("Error with deleting task", err);
    }
}