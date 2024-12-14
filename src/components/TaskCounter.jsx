import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskCounter = () => {
  const { taskCounts } = useContext(TaskContext);

  if (!taskCounts) {
    return <div>Loading task counts...</div>;
  }

  return (
     <div className="task-counter bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white p-6 rounded-lg shadow-2xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-center underline decoration-blue-500 decoration-4">Task Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="task-item flex flex-col items-center bg-blue-600 hover:bg-blue-700 transition duration-300 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-medium uppercase tracking-wide mb-2">Total Tasks</h3>
          <p className="text-4xl font-extrabold">{taskCounts.allTasks}</p>
        </div>
        <div className="task-item flex flex-col items-center bg-yellow-500 hover:bg-yellow-600 transition duration-300 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-medium uppercase tracking-wide mb-2">To Do</h3>
          <p className="text-4xl font-extrabold">{taskCounts.toDoTasks}</p>
        </div>
        <div className="task-item flex flex-col items-center bg-green-500 hover:bg-green-600 transition duration-300 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-medium uppercase tracking-wide mb-2">Done</h3>
          <p className="text-4xl font-extrabold">{taskCounts.doneTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCounter;
