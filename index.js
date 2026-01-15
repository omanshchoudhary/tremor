const writeTask = require('./utils/writeTask.js')
const readTask = require('./utils/readTask.js')
const utility = require('./utils/utility.js')


const rawData = readTask.read();
const taskArray = JSON.parse(rawData) || [];

const args = process.argv.slice(2);
const command = args[0]

let nextId = utility.getMaxID(taskArray);

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

  case 'list':
    if (taskArray.length <= 0) {
      console.log('No tasks found')
      break;
    }
    const list = `
${taskArray.map(task => {
      return `[${task.status}] ${task.description}`
    }).join('\n')}
        `;
    console.log(list);
    break;

  default:
    console.log("Please give the command")
}


