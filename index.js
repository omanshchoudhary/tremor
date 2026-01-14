const writeTask = require('./utils/writeTask.js')
const readTask = require('./utils/readTask.js')
const args = process.argv.slice(2);
const command = args[0]
let nextId=0;
switch (command) {
    case 'add':
        const descriptionInput = args[1] || "No Description"
        const task = {
            "id": (++nextId),
            "description": descriptionInput,
            "status": "pending"
        }
        writeTask.write(task);
        console.log(`Task added with ID: ${nextId}`);
        break;

    case 'print':
        const response = readTask.read();
        console.log(response);
        break;

    default:
        console.log("Please give the command")
}


