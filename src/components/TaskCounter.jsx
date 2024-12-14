import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskCounter = () => {
  const { taskCounts } = useContext(TaskContext);

  if (!taskCounts) {
    return <div>Loading task counts...</div>;
  }

  return (
    <div className="task-counter bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Task Overview</h2>
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
        <div className="task-item flex-1 p-4 bg-blue-500 rounded-lg text-center">
          <h3 className="text-xl font-medium">Total Tasks</h3>
          <p className="text-2xl font-bold">{taskCounts.allTasks}</p>
        </div>
        <div className="task-item flex-1 p-4 bg-yellow-500 rounded-lg text-center">
          <h3 className="text-xl font-medium">To Do</h3>
          <p className="text-2xl font-bold">{taskCounts.toDoTasks}</p>
        </div>
        <div className="task-item flex-1 p-4 bg-green-500 rounded-lg text-center">
          <h3 className="text-xl font-medium">Done</h3>
          <p className="text-2xl font-bold">{taskCounts.doneTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCounter;
