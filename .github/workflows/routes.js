const express = require('express');
const router = express.Router();

const createNewTask = require('./controllers/create_new_task');
const getAllTasks = require('./controllers/get_all_tasks');
const updateTasks = require('./controllers/update_task');
const deleteTask = require('./controllers/delete_task');

router.post('/', createNewTask);


router.get('/', getAllTasks);

router.put('/:taskId', updateTasks);

// router.delete('/:taskId', deleteTask);
router.post('/:taskId', deleteTask);

module.exports = router;