const writeTask = require('./utils/writeTask.js')
const readTask = require('./utils/readTask.js')
const utility = require('./utils/utility.js')


const rawData = readTask.read();
const taskArray = JSON.parse(rawData) || [];

const args = process.argv.slice(2);
const command = args[0]

let nextId=utility.getMaxID(taskArray);

switch (command) {
    case 'add':
        const descriptionInput = args.slice(1).join(' ') || "No Description"
        const task = {
            "id": (++nextId),
            "description": descriptionInput,
            "status": "pending"
        }
        writeTask.write(task, taskArray);
        console.log(`Task added with ID: ${nextId}`);
        break;

    case 'print':
        const response = readTask.read();
        console.log(response);
        break;

    default:
        console.log("Please give the command")
}


