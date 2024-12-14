import React, { useState } from 'react';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskFilter = () => {
  const { filterTasks, filterBySearch } = useContext(TaskContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterBySearch(term);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-between bg-gray-800 text-white p-4 rounded-md shadow-md">
      <input type="text" placeholder="Search by Title" className="bg-gray-700 w-full sm:w-96 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={searchTerm} onChange={handleSearch}/>
      <select className="bg-gray-700 w-full sm:w-auto text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 sm:mt-0" onChange={(e) => filterTasks(e.target.value)}>
        <option value="">All</option>
        <option value="To Do">To Do</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default TaskFilter;
