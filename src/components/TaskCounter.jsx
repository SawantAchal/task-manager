import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskCounter = () => {
  const { taskCounts } = useContext(TaskContext);

  if (!taskCounts) {
    return <div className="text-center text-white">Loading task counts...</div>;
  }

  return (
    <div className="task-counter bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-6 px-4 sm:py-8 sm:px-6 rounded-lg shadow-2xl mx-auto w-full max-w-2xl md:max-w-4xl">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 underline decoration-blue-400 decoration-4">
        Task Overview
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:gap-6">
        <div className="task-item bg-blue-600 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:bg-blue-700 transition duration-300">
          <h3 className="text-lg sm:text-xl font-medium tracking-wide mb-1">Total Tasks</h3>
          <p className="text-3xl sm:text-4xl font-bold">{taskCounts.allTasks}</p>
        </div>
        <div className="task-item bg-yellow-500 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:bg-yellow-600 transition duration-300">
          <h3 className="text-lg sm:text-xl font-medium tracking-wide mb-1">To Do</h3>
          <p className="text-3xl sm:text-4xl font-bold">{taskCounts.toDoTasks}</p>
        </div>
        <div className="task-item bg-green-500 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:bg-green-600 transition duration-300">
          <h3 className="text-lg sm:text-xl font-medium tracking-wide mb-1">Done</h3>
          <p className="text-3xl sm:text-4xl font-bold">{taskCounts.doneTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCounter;
