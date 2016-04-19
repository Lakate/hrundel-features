'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    name: String,
    studentsDone: [{type: Schema.Types.ObjectId, ref: 'Students'}],
    studentsFailed: [{type: Schema.Types.ObjectId, ref: 'Students'}],
    studentsPending: [{type: Schema.Types.ObjectId, ref: 'Students'}]
});

module.exports = mongoose.model('Tasks', taskSchema);
