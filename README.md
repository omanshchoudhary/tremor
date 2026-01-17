```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  ████████╗██████╗ ███████╗███╗   ███╗ ██████╗ ██████╗     ║
║  ╚══██╔══╝██╔══██╗██╔════╝████╗ ████║██╔═══██╗██╔══██╗    ║
║     ██║   ██████╔╝█████╗  ██╔████╔██║██║   ██║██████╔╝    ║
║     ██║   ██╔══██╗██╔══╝  ██║╚██╔╝██║██║   ██║██╔══██╗    ║
║     ██║   ██║  ██║███████╗██║ ╚═╝ ██║╚██████╔╝██║  ██║    ║
║     ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝    ║
║                                                            ║
║            CLI Todo List Manager                          ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

A file-based command-line todo list application built with Node.js.

## Overview

Tremor is a CLI todo list application that stores tasks in a JSON file. Focuses on practical implementation of core Node.js concepts.

## Features

- Add tasks with descriptions and optional deadlines
- List all tasks in formatted table view
- Mark tasks as completed
- Delete tasks by ID
- Persistent storage in JSON file
- Unique ID generation that survives restarts
- Input validation and error handling
- Help command with usage examples

## Installation

**Requirements:**
- Node.js v14+
- npm

**Setup:**
```bash
git clone <repository-url>
cd tremor
npm install
```

## Quick Start

```bash
# Add some tasks
node index.js add "Buy groceries" "2026-01-20"
node index.js add "Complete Node.js project"
node index.js add "Read documentation" "2026-01-25"

# View all tasks
node index.js list

# Mark task as complete
node index.js complete 1

# Delete a task
node index.js delete 2
```

## Usage

### Add a Task
```bash
node index.js add "Task description" "2026-01-20"
node index.js add "Task without deadline"
```

**Output:**
```
Task added with ID: 1
```

### List All Tasks
```bash
node index.js list
```

**Output:**
```
ID    Description                           Deadline        Status
--------------------------------------------------------------------
2     Go and buy cakes                      2026-12-12      [completed]
3     Buy some milk                         2026-01-02      [completed]
4     Testing basic add functionality       2026-02-15      [pending]
```

### Mark Task as Complete
```bash
node index.js complete 3
```

**Output:**
```
Task 3 marked as completed
```

### Delete a Task
```bash
node index.js delete 2
```

**Output:**
```
Task 2 deleted successfully
```

### Show Help
```bash
node index.js help
```

**Output:**
```
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
```

### Development Mode
```bash
npm start
```
Runs with nodemon for auto-reload during development.

## Error Handling

The application handles common errors:

```bash
# Missing task description
$ node index.js add
Error: Task description is required

# Invalid task ID
$ node index.js complete abc
Error: Please provide a valid numeric ID.

# Task not found
$ node index.js delete 999
Error: Task with ID 999 does not exist.

# Invalid command
$ node index.js invalid
Error: Invalid command. Use 'add', 'list', 'complete', 'delete' or 'help
```

## Project Structure

```
tremor/
├── data/
│   └── tasks.json       # Task storage
├── utils/
│   ├── readTask.js      # Read operations
│   ├── writeTask.js     # Write operations
│   └── utility.js       # Helper functions
├── index.js             # Main entry point
├── package.json
└── README.md
```

## Task Format

Tasks are stored in JSON format:

```json
{
  "id": 1,
  "description": "Task description",
  "deadline": "2026-01-20",
  "status": "pending"
}
```