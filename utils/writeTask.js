const fs = require('fs')
const readTask = require('./readTask.js');


function write(task) {
    const jsonArray = readTask.read() ? JSON.parse(readTask.read()) : []
    jsonArray.push(task);
    fs.writeFileSync('./data/tasks.json', JSON.stringify(jsonArray))
}

module.exports = {
    write
}

