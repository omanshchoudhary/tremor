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

## Implementation Progress

| Feature | Status | Notes |
|---------|--------|-------|
| Project Setup | Done | npm, nodemon configured |
| File Operations | Done | Read/write to JSON |
| ID Management | Done | Persistent unique IDs |
| Add Command | Done | Multi-word support |
| Pretty Print JSON | Pending | Single-line output currently |
| List Formatting | Pending | Shows raw JSON |
| Complete Command | Pending | - |
| Delete Command | Pending | - |
| Input Validation | Pending | - |
| Error Handling | Pending | - |
| Help Command | Pending | - |

## Roadmap

**Phase 1 (Current):**
- Fix JSON formatting
- Implement formatted list view
- Add complete command
- Add delete command

**Phase 2:**
- Input validation
- Comprehensive error handling
- Help command

**Phase 3:**
- Edit functionality
- Task filtering
- Search capability

## Technical Details

**Core Concepts Used:**
- `fs.readFileSync()` / `fs.writeFileSync()`
- `process.argv` for CLI arguments
- `JSON.parse()` / `JSON.stringify()`
- Module exports and code organization
- Array manipulation methods

## Known Issues

1. JSON output is not pretty-printed
2. List command shows raw JSON string
3. No input validation for empty tasks
4. Complete and delete commands not implemented

## Contributing

Feedback and suggestions welcome. This is a learning project but improvements are appreciated.

---

**Version:** 1.0.0  
**Status:** In Development  
**Last Updated:** January 2026