import React, { useState } from 'react'
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
    <>
        <div className="flex justify-between items-center mb-4">
            <input type="text" placeholder="Search by Title" className="border px-3 py-2 rounded w-1/3" value={searchTerm} onChange={handleSearch}/>
            <select className="border px-3 py-2 rounded" onChange={(e) => filterTasks(e.target.value)}>
                <option value="">All</option>
                <option value="To Do">To Do</option>
                <option value="Done">Done</option>
            </select>
        </div>
    </>
  )
}

export default TaskFilter