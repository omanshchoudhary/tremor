const fs = require('fs')

function read() {
    const response = fs.readFileSync('./data/tasks.json', 'utf-8');
    return response;
}

module.exports = {
    read
}