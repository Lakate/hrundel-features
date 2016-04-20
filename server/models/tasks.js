'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    name: String,
    userId: {type: Schema.Types.ObjectId, ref: 'Student'},
    status: String
});

module.exports = mongoose.model('Tasks', taskSchema);
