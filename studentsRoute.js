const express = require('express');
const router = express.Router();

const students = require('./controllers/students');

router.post('/add', students.create);
router.put('/edit', students.update);

router.get('/:id', students.getStudent);

router.get('/:id/tasks', students.getStudentTasks);
router.post('/:id/tasks', students.setStudentTasks);

module.exports = router;
