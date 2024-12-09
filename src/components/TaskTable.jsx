import React, { useContext, useEffect, useRef } from 'react'
import { TaskContext } from '../context/TaskContext';
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";

const TaskTable = () => {
    const tableRef = useRef(null);
    const { filteredTasks, deleteTask } = useContext(TaskContext);

    useEffect(() => {
        if (tableRef.current) {
            new Tabulator(tableRef.current, {
                data: filteredTasks,
                layout: "fitColumns",
                columns: [
                    { title: "User ID", field: "userId" },
                    { title: "Title", field: "title" ,editor: "input", },
                    { title: "Status", field: "completed", width: 150, editor: "input",  editorParams: {   values: { false: "To Do", true: "Done" }, }, formatter: (cell) => (cell.getValue() ? "Done" : "To Do"), },
                    { title: "Actions", formatter: "buttonCross", cellClick: (_, cell) => deleteTask(cell.getRow().getData().id),},
                ],
            });
        }
    }, [filteredTasks]);

  return (
    <div ref={tableRef}></div>
  )
}

export default TaskTable