const express = require('express');
const router = express.Router();

const students = require('./src/controllers/students');

router.get('/', (req, res) => {
    const Students = require('./src/models/student');
    Students.findAllStudents()
        .then(students => {
            res.json({
                students
            });
        });
});
router.post('/refresh', students.refresh);
router.get('/:id', students.getStudent);

module.exports = router;
