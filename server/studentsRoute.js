const express = require('express');
const router = express.Router();

const students = require('./controllers/students');

router.get('/', (req, res) => {
    const Students = require('./models/student');
    Students.findAllStudents()
        .then(students => {
            res.json({
                students
            });
        });
});
router.post('/refresh', students.refresh);
router.put('/getCommentsAndCommits', students.getCommentsAndCommits);

router.get('/:id', students.getStudent);

module.exports = router;
