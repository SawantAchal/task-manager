## Task Manager Application ##
This project is a Task Manager application built using React, Axios, and React Toastify. It allows users to manage tasks with features to add, delete, filter, and search tasks. The application fetches initial data from an API and organizes tasks into categories: To Do and Done.

deploy : https://task-manager-2lbh.onrender.com/

# Features #

**Core Features**

  - Add Task: Create new tasks and add them to the list.

  - Delete Task: Remove tasks from the list.

  - Filter Tasks: View tasks based on their completion status (To Do or Done).

  - Search Tasks: Search tasks by title.

**Task Counts:** Display the total number of tasks, tasks yet to be done, and completed tasks.

**User Experience**

  - Toast Notifications: Success messages for adding and deleting tasks.

  - Responsive Design: Optimized for both desktop and mobile views.

# Project Setup #

**Prerequisites**

  - Node.js and npm installed on your system.

**Installation**

  - Clone the repository: <b>git clone (https://github.com/SawantAchal/task-manager.git) </b>

  - Install dependencies: npm install

  - Start the development server: npm run dev

  - Open your browser and navigate to: http://localhost:5173

**Key Components**

  - TaskProvider (src/context/TaskContext.jsx)

    - Manages the global state of tasks and provides methods to manipulate them. Includes the following:

        - State Variables:

        - tasks: Array of all tasks.

        - filteredTasks: Filtered tasks based on status or search.

        - filterStatus: Current filter status.

    - Methods:

        - addTask(task): Add a new task.

        - deleteTask(taskId): Delete a task by ID.

        - filterTasks(status): Filter tasks by status.

        - filterBySearch(term): Search tasks by title.

    - TaskCounter (src/components/TaskCounter.jsx)

        - Displays the count of total tasks, To Do tasks, and Done tasks.

**API Usage**

  - This project uses the JSONPlaceholder API to fetch initial tasks:

      - Endpoint: https://jsonplaceholder.typicode.com/todos

      - Fetches the first 20 tasks as sample data.

  - Dependencies

      - React: For building the user interface.

      - Axios: For API calls.

      - React Toastify: For user notifications.

**Future Enhancements**

  - Implement user authentication for personalized task lists.
    
  - Add drag-and-drop functionality to rearrange tasks.
