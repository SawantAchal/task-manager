import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

const TaskCounter = () => {
    const { taskCounts } = useContext(TaskContext);
 
    if (!taskCounts) {
        return <div>Loading task counts...</div>;
    }

    return (
    <>
        <div className="task-counter">
            <h2 className="text-xl font-semibold">
                Total Tasks: {taskCounts.allTasks}
            </h2>
            <p>To Do: {taskCounts.toDoTasks}</p>
            <p>Done: {taskCounts.doneTasks}</p>
        </div>
    </>
  )
}

export default TaskCounter