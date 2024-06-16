const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dashboardRoutes = require('./route/dashboardRoutes');
const goalsRoutes = require('./route/goalsRoutes');
const tasksRoutes=require('./route/tasksRoutes')
const userRoutes = require('./route/userRoute');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.json({ limit: '10mb' }));

app.use('/employee/dashboard', dashboardRoutes);
app.use('/employee/goals', goalsRoutes);
app.use('/employee/tasks', tasksRoutes);
app.use('/employee/users', userRoutes);

module.exports = app;
