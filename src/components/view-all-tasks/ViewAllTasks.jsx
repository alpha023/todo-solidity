import React, { useEffect, useState } from "react";
import Navigation from "../navigation/Navigation";
import TaskCardboard from "../task-cardboard/TaskCardboard";

const ViewAllTask = () => {
  const [tasksList, setTasksList] = useState([]);
  useEffect(() => {
    const allTasks = async () => {
      try {
        const res = await fetch(
          `http://127.0.0.1:3000/api/ethereum/view-all-tasks`,
          {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          }
        );
        console.log(res, "fsffvd");
        const data = await res.json();
        console.log(data.data);
        if (data.status === 200) {
          setTasksList(data.data);
        }
        if (data.status === 400) {
          console.log("No Task Available To Show!!! add some");
        }
        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    allTasks();
  }, []);
  return (
    <>
      <Navigation />
      <div className="view_all_tasks">
        {tasksList?.map((task) => {
          return (
            <TaskCardboard
              task={task}
              key={task.id}
              style={
                task.id !== "" && task.name !== "" && task.date !== ""
                  ? {}
                  : { display: "none" }
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default ViewAllTask;
