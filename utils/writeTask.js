const fs = require('fs')
const readTask = require('./readTask.js');


function write(task, taskArray) {
    if(task) taskArray.push(task);
    fs.writeFileSync('./data/tasks.json', JSON.stringify(taskArray, null,2))
}

module.exports = {
    write
}   

