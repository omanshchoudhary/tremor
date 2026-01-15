const writeTask = require('./utils/writeTask.js')
const readTask = require('./utils/readTask.js')
const utility = require('./utils/utility.js')


const rawData = readTask.read();
let taskArray = JSON.parse(rawData) || [];

const args = process.argv.slice(2);
const command = args[0]

let nextId = utility.getMaxID(taskArray);

switch (command) {
    case 'add':
        const descriptionInput = args[1] || "No Description"
        if (descriptionInput === "No Description") {
            console.log("Error: Task description is required");
            break;
        }
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

    case 'complete':
        const idToComplete = Number(args[1]);
        if (Number.isNaN(idToComplete)) {
            console.log("Error: Please provide a valid numeric ID.");
            break;
        }

        taskArray = taskArray.map(task => {
            if (task.id === idToComplete) {
                return { ...task, status: "completed" }
            }
            return task;
        })
        writeTask.write(null, taskArray);
        console.log("Success")
        break;

    case 'delete':
        const idToDelete = Number(args[1]);
        const prevLength = taskArray.length;
        if (Number.isNaN(idToDelete)) {
            console.log("Error: Please provide a valid numeric ID.");
            break;
        }
        taskArray = taskArray.filter(task => {
            if (task.id != idToDelete) {
                return task;
            }
        })
        if (taskArray.length + 1 != prevLength) {
            console.log(`Error: Task with ID ${idToDelete} does not exist.`);
            break;
        }
        writeTask.write(null, taskArray);
        console.log("Success")
        break;

    case 'help':
        const helpMessage = `
Usage: node index.js <command> [arguments]

Available Commands:
  add <description> <deadline>   Add a new task
  list                           Show all tasks
  complete <id>                  Mark task as completed
  delete <id>                    Delete a task
  help                           Show this help

Examples:
  node index.js add "Buy milk" "2026-01-20"
  node index.js list
  node index.js complete 1
  node index.js delete 2
`;

        console.log(helpMessage);
        break;
    default:
        console.log("Error: Invalid command. Use 'add', 'list', 'complete', 'delete' or 'help");
        break;
}


