# Todo List App

A simple, modern, and responsive Todo List application built with React and Tailwind CSS.

## Features

- **Add Todos**: Easily add new tasks to your list.
- **Mark as Completed**: Toggle the status of your tasks with a simple checkbox.
- **Delete Todos**: Remove tasks you no longer need.
- **Persistent Storage**: Your todos are saved in the browser's Local Storage, so you won't lose them on refresh.
- **Responsive Design**: Looks great on both desktop and mobile devices.
- **Dark Mode**: Sleek dark-themed interface.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Next Generation Frontend Tooling.
- **Lucide React**: Beautiful & consistent icons.
- **React Hook Form**: Performant, flexible and extensible forms with easy-to-use validation.

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd todo-list
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Start the development server:

    ```bash
    npm run dev
    ```

## Project Structure

```
src/
├── components/
│   ├── TodoInput.jsx   # Component for adding new todos
│   └── TodoList.jsx    # Component for displaying the list of todos
├── App.jsx             # Main application component
├── index.css           # Global styles and Tailwind imports
└── main.jsx            # Entry point
```

## Usage

1.  Type your task in the input field.
2.  Click "Add Todo" or press Enter.
3.  Click the checkbox to mark a task as completed.
4.  Click the trash icon to delete a task.

