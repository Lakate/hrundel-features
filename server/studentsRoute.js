const express = require('express');
const router = express.Router();

const students = require('./controllers/students');

router.post('/add', students.create);
router.put('/edit', students.updateTask);

router.get('/:id', students.getStudent);

module.exports = router;
