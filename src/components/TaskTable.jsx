import React, { useContext, useEffect, useRef } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css';

const TaskTable = () => {
    const tableRef = useRef(null);
    const { filteredTasks, deleteTask } = useContext(TaskContext);
    const tableInstance = useRef(null);

    useEffect(() => {
        if (tableRef.current) {
            if (tableInstance.current) {
                tableInstance.current.destroy();
            }

            tableInstance.current = new Tabulator(tableRef.current, {
                data: filteredTasks,
                layout: "fitColumns",
                columns: [
                    { title: "User ID", field: "userId" },
                    { title: "Title", field: "title", editor: "input" },
                    {
                        title: "Status",
                        field: "completed",
                        width: 150,
                        editor: (cell) => {
                            // Custom editor for the dropdown
                            const dropdown = document.createElement("select");
                            const option1 = document.createElement("option");
                            option1.value = "false";
                            option1.textContent = "To Do";
                            const option2 = document.createElement("option");
                            option2.value = "true";
                            option2.textContent = "Done";
                            dropdown.appendChild(option1);
                            dropdown.appendChild(option2);
                            dropdown.value = cell.getValue() ? "true" : "false";
                            dropdown.addEventListener("change", (e) => {
                                cell.setValue(e.target.value === "true");
                            });
                            return dropdown;
                        },
                        formatter: (cell) => (cell.getValue() ? "Done" : "To Do"),
                    },
                    { 
                        title: "Actions", 
                        formatter: "buttonCross", 
                        cellClick: (_, cell) => deleteTask(cell.getRow().getData().id),
                    },
                ],
                cellEdited: (cell) => {
                },
            });
        }
        return () => {
            if (tableInstance.current) {
                tableInstance.current.destroy();
            }
        };
    }, [filteredTasks]);
    return (
        <div className="table-container p-5 rounded-lg bg-gradient-to-br from-red-800 to-red-600 text-black">
            <div className="tabulator-table text-sm  overflow-hidden rounded-lg text-black" ref={tableRef}></div>
        </div>
    );
};

export default TaskTable;