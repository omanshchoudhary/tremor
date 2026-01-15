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
    const descriptionInput = args[1] || "No Description"
    const deadlineInput = args[2] || "";
    const task = {
      "id": (++nextId),
      "description": descriptionInput,
      "deadline": deadlineInput,
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
    const maxDesc = Math.max(...taskArray.map(t => t.description.length), 11);
    const descWidth = maxDesc + 4;
    const header = "ID".padEnd(6) + "Description".padEnd(descWidth) + "Deadline".padEnd(15) + "Status";
    const separator = "-".repeat(descWidth + 30);
    const table = taskArray.map(task => {
      return task.id.toString().padEnd(6) +
        task.description.padEnd(descWidth) +
        task.deadline.padEnd(15) +
        `[${task.status}]`;
    }).join('\n');
    console.log(`${header}\n${separator}\n${table}`);
    break;

  default:
    console.log("Please give the command")
}


