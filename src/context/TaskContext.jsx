import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const TaskContext = createContext()

const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filterStatus, setFilterStatus] = useState("");

      // Fetch initial data
    const fetchData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            const first20Tasks = res.data.slice(0, 20);
            setTasks(first20Tasks);
            setFilteredTasks(first20Tasks); // Initialize filtered data
        } catch (error) {
            console.log("Error:", error.message);
        }
    };

    useEffect(() => {
        fetchData()
    },[])

    const addTask = (task) => {
        setTasks((prev) => [...prev, task]);
        setFilteredTasks((prev) => [...prev, task]);
        toast.success("Task added successfully!");
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
        toast.success("Task deleted successfully!");
    };

    const filterTasks = (status) => {
        setFilterStatus(status);
        if (status === "") {
            setFilteredTasks(tasks);
        } else {
            const isCompleted = status === "Done";
            setFilteredTasks(tasks.filter((task) => task.completed === isCompleted));
        }
    };
    
    const filterBySearch = (term) => {
        const lowerCaseTerm = term.toLowerCase();
        setFilteredTasks(
            tasks.filter((task) => task.title.toLowerCase().includes(lowerCaseTerm))
        );
    };

    const taskCounts = {
        allTasks: tasks.length,
        toDoTasks: tasks.filter((task) => !task.completed).length,
        doneTasks: tasks.filter((task) => task.completed).length,
    };


    const value = {
        addTask,
        deleteTask,
        tasks,
        filterTasks,
        filteredTasks,
        filterBySearch,
        taskCounts
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;