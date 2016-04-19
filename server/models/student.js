'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    login: String,
    mentor: String,
    tasksDone: [{type: Schema.Types.ObjectId, ref: 'Tasks'}],
    tasksFailed: [{type: Schema.Types.ObjectId, ref: 'Tasks'}],
    tasksPending: [{type: Schema.Types.ObjectId, ref: 'Tasks'}],
    stars: Number
});

module.exports = mongoose.model('Students', studentSchema);
