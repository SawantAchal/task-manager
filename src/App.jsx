
import './App.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskFilter from './components/TaskFilter';
import TaskTable from './components/TaskTable';
import TaskFormModel from './components/TaskFormModel';
import { useState } from 'react';
import TaskCounter from './components/TaskCounter';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <ToastContainer/>
    <div className="p-4">
      <TaskFilter />
      <TaskCounter/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setShowModal(true)} >
          Add Task
        </button>
        <TaskTable />
        <TaskFormModel showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  )
}

export default App
