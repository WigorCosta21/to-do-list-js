# Task List

This is a simple task list application that allows you to add and delete tasks. It is built using HTML, CSS, and JavaScript.

## Features

- Add tasks to the list
- Delete tasks from the list
- Mark tasks as completed

## Usage

To use this application, follow these steps:

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.
3. Type a task in the input field and click the "Add" button to add it to the list.
4. Click the checkmark icon to mark a task as completed.
5. Click the trash icon to delete a task from the list.

## Code Explanation

The JavaScript code in `script.js` file provides the functionality for the task list application. Here's an overview of the code:

- The code starts by selecting the necessary HTML elements using `document.querySelector()` and assigning them to variables.

- The tasks are stored in an array called `tasks`, which is initially populated by retrieving data from local storage using `localStorage.getItem()`.

- The `clearInput()` function checks if the input value is empty or contains only whitespace.

- The `addTask()` function adds a new task to the `tasks` array, updates the UI by calling `renderTask()`, and saves the updated `tasks` array to local storage using `saveData()`.

- The `deleteTask()` function removes a task from the `tasks` array based on its index, updates the UI by calling `renderTask()`, and saves the updated `tasks` array to local storage using `saveData()`.

- The `renderTask()` function clears the task list, iterates over the `tasks` array, and creates HTML elements for each task. It adds event listeners to the checkmark and trash icons to handle marking tasks as completed and deleting tasks, respectively.

- The `msgErro()` function displays an error message if the input value is empty. It creates and appends an error message element to the form.

- The `removeErrorMessage()` function removes the error message from the form.

- The `saveData()` function saves the `tasks` array to local storage as a JSON string using `localStorage.setItem()`.

- Finally, an event listener is added to the "Add" button to trigger the `addTask()` function when clicked.

## Conclusion

This task list application provides a simple way to manage your tasks. Feel free to modify and enhance it according to your needs. Happy tasking!
