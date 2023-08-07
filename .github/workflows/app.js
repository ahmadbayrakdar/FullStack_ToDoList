const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// MongoDB connection URL
const mongoDB = "mongodb://127.0.0.1:27017/todolist";

// Connect to MongoDB
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        // Start the Express app after successful MongoDB connection
        app.listen(port, () => {
            console.log('To-Do-List App is running on port 3000');
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

// TaskList route
app.get('/', (req, res, next) => {
    res.redirect('tasks');
});
app.get('/TaskList', (req, res, next) => {
});

// Set up routes
app.use('/tasks', routes);

app.get('/create', (req, res, next) => {
    // Create a new instance of SomeModel with predefined values
    const taskInstance = new SomeModel({
        name: "Task 1",
        description: "Task 1",
        completed: false
    });

    taskInstance.save()
        .then(savedTask => {
            console.log('Task saved:', savedTask);
        })
        .catch(error => {
            console.error('Error saving task:', error);
        });

    res.send('Task created!');
})

// Handle 404
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});
