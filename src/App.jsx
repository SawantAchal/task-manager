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
        <div className="bg-gray-800 text-white p-4 rounded-md flex flex-col gap-4 lg:flex-row justify-between items-center mb-4 shadow-md">
          <div className="w-full sm:w-1/2">
            <TaskFilter />
          </div>
          <div className="w-full sm:w-1/4">
            <TaskCounter />
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300 w-full sm:w-auto" onClick={() => setShowModal(true)}>
            Add Task
          </button>
        </div>
        <div className="overflow-x-auto">
          <TaskTable />
        </div>
        <TaskFormModel showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default App;
