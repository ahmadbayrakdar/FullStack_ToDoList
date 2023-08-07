const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = TaskModel;
