# Tremor - CLI Todo List Manager

A file-based command-line todo list application built with Node.js.

## Overview

Tremor is a CLI todo list application that stores tasks in a JSON file. Focuses on practical implementation of core Node.js concepts.

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

## Usage

**Add a task:**
```bash
node index.js add "Buy groceries" "2026-01-20"
node index.js add "Complete project"
```

**List all tasks:**
```bash
node index.js list
```

**Mark task as complete:**
```bash
node index.js complete 1
```

**Delete a task:**
```bash
node index.js delete 2
```

**Show help:**
```bash
node index.js help
```

**Development mode:**
```bash
npm start
```

## Features

- Add tasks with descriptions and optional deadlines
- List all tasks in formatted table view
- Mark tasks as completed
- Delete tasks by ID
- Persistent storage in JSON file
- Unique ID generation that survives restarts
- Input validation and error handling
- Help command with usage examples

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

```json
{
  "id": 1,
  "description": "Task description",
  "deadline": "2026-01-20",
  "status": "pending"
}
```