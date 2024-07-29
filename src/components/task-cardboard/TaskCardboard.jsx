import React from "react";

// const TaskCardboard = ({task}) => {
//   return (
//     <div className='view_all_tasks_card'>
//      <p>{task.title}</p>
//      <p>{task.description}</p>
//      <p>{task.date}</p>
//      <p>{task.status}</p>
//     </div>
//   )
// }

// export default TaskCardboard

// import React from "react";
import './task-cardboard.css';

const TaskCardboard = ({task}) => {
  return (
    <div className="container">
      <div className="box">
        <h3>{task.title}</h3>
        <p>
          {task.description}
          {/* <a href="">Click Here</a> */}
          <span className="count">{task.id}</span>
        </p>
        <p id="#task_date">Complete By: {task.date}</p>
        <p id="task_status">Current Status: {task.status}</p>
      </div>
    </div>
  );
};

export default TaskCardboard;
