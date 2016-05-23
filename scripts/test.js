'use strict';

const getPRData = require('./getPRData');
const async = require('async');

// let task = {
//     "number": 1,
//     "taskType": "webdev",
//     "mentor": "mokhov",
//     "status": "accepted",
//     "pr": 9,
//     "_id": {
//         "$oid": "572c1dd1c187dcdc37c17957"
//     }
// };

let a = getPRData.getPRComments.bind(null, task);

async.parallel([a], (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
