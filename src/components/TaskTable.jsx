import React, { useContext, useEffect, useRef } from "react";
import { TaskContext } from "../context/TaskContext";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";

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
        responsiveLayout: "collapse",
        columns: [
          { title: "User ID", field: "userId", headerSort: false },
          { title: "Title", field: "title", editor: "input", headerSort: false },
          {
            title: "Status",
            field: "completed",
            editor: "select",
            editorParams: { values: { false: "To Do", true: "Done" } },
            formatter: (cell) => (cell.getValue() ? "Done" : "To Do"),
          },
          {
            title: "Delete",
            formatter: "html",
            headerSort: false,
            formatter: "buttonCross",
            cellClick: (e, cell) => deleteTask(cell.getRow().getData().id),
          },
        ],
      });
    }
    return () => {
      if (tableInstance.current) {
        tableInstance.current.destroy();
      }
    };
  }, [filteredTasks]);

  return (
    <div className="table-container overflow-x-auto">
      <div className="tabulator text-sm overflow-hidden rounded-lg" ref={tableRef}></div>
    </div>
  );
};

export default TaskTable;
