# Tremor - CLI Todo List Manager

A file-based command-line todo list application built with Node.js.

## Overview

Tremor is a CLI todo list application that stores tasks in a JSON file. Focuses on practical implementation of core Node.js concepts.

## Current Status

**Working:**
- Add tasks with persistent storage
- Unique ID generation that survives restarts
- Basic task viewing
- File-based storage system

**In Progress:**
- Formatted list output
- Task completion
- Task deletion
- Input validation
- Error handling

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
node index.js add "Task description"
```

**View tasks:**
```bash
node index.js print
```

**Development mode:**
```bash
npm start
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
└── package.json
```

**Task Format:**
```json
{
  "id": 1,
  "description": "Task description",
  "status": "pending"
}
```

## Current Features

- Add tasks with descriptions
- Persistent storage in JSON file
- Unique ID generation
- View all tasks

## Upcoming Features

- Formatted list output
- Mark tasks as complete
- Delete tasks
- Input validation
- Error handling
- Help command