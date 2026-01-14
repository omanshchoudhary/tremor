const fs = require('fs')
const readTask = require('./readTask.js');


function write(task) {
    const response = readTask.read();
    const jsonArray = response ? JSON.parse(response) : [];
    jsonArray.push(task);
    fs.writeFileSync('./data/tasks.json', JSON.stringify(jsonArray, null, 2));
}

module.exports = {
    write
}

