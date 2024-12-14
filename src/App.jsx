import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskFilter from './components/TaskFilter';
import TaskTable from './components/TaskTable';
import TaskFormModel from './components/TaskFormModel';
import { useState } from 'react';
import TaskCounter from './components/TaskCounter';
import 'tabulator-tables/dist/css/tabulator.min.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ToastContainer />
      <div className="p-4">
        <div className="bg-gray-800 text-white p-4 rounded-md flex flex-col sm:flex-row justify-between items-center mb-4 shadow-md">
          <TaskFilter />
          <TaskCounter />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full sm:w-auto mt-4 sm:mt-0" onClick={() => setShowModal(true)}>
            Add Task
          </button>
        </div>
        <TaskTable />
        <TaskFormModel showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default App;

