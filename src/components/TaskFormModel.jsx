import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext';
import { toast } from 'react-toastify';

const TaskFormModel = ({ showModal, setShowModal }) => {
    const { addTask } = useContext(TaskContext);
    const [newTask, setNewTask] = useState({ userId: "", title: "", completed: false });

    const handleSubmit = () => {
        if (!newTask.userId || !newTask.title) return toast.warning("User ID and Title are required!");
        addTask({ ...newTask, id: Date.now() });
        setNewTask({ userId: "", title: "", completed: false });
        setShowModal(false);
    };

    if (!showModal) return null;

  return (
    <>
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">Add New Task</h2>
                <input type="number" placeholder="User ID" className="w-full border px-3 py-2 mb-4 rounded" value={newTask.userId} onChange={(e) => setNewTask({ ...newTask, userId: e.target.value })}/>
                <input type="text" placeholder="Title" className="w-full border px-3 py-2 mb-4 rounded" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}/>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Status</label>
                    <select className="w-full border px-3 py-2 rounded" value={newTask.completed} onChange={(e) => setNewTask({ ...newTask, completed: e.target.value === "true" })}>
                        <option value="false">To Do</option>
                        <option value="true">Done</option>
                    </select>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded shadow" onClick={handleSubmit}>
                    Add Task
                </button>
                <button className="bg-gray-400 text-white px-4 py-2 rounded mr-2" onClick={() => setShowModal(false)}>
                    Cancel
                </button>
            </div>
        </div>
    </>
  )
}

export default TaskFormModel