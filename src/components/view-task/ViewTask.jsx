import React, { useState } from "react";
import {CONTRACT_ADDRESS,CONTRACT_ABI }from "../../constants/ServerConstants";
import { SERVER_URL } from "../../constants/ServerConstants";
import Navigation from "../navigation/Navigation";

const ViewTask = () => {
  const [currentTask, setCurrentTask] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const viewTask = async (event) => {
    try {
      event.preventDefault();
      const taskId = document.querySelector("#taskID").value;
      console.log(taskId);
      const res = await fetch(
        `${SERVER_URL}/api/ethereum/view-task/${taskId}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.status === 200) {
        setCurrentTask(data.task);
      }
      if (data.status === 404) {
        console.log("No Task Available With Such ID!!!");
      }
    } catch (error) {
      console.log(error);
      setModalContent("Task does not exist");
      setModalVisible(true);
    }
  };
  const closeModal = () => {
    setModalVisible(false);
    setModalContent("");
  };
  return (
    <>
      {/* <form onSubmit={viewTask}>
        <label>
          ID:
          <input id="taskId" />
        </label>
        <button type="submit">View Task</button>
      </form> */}

      <Navigation />
      <div className="view_task todo_btn">
        {currentTask.id !== null && currentTask.title !== null && currentTask.date !== null ? (
          <div className="view_task_by_id  view_all_tasks_card">
            <p>Task ID: {currentTask.id}</p>
            <p>Task Name: {currentTask.title}</p>
            <p>Task Description: {currentTask.description}</p>
            <p>Task Status: {currentTask.status}</p>
            <p>Task Date: {currentTask.date}</p>
          </div>
        ) : (
          <div className="empty_div"></div>
        )}
        <form onSubmit={viewTask}>
          <label>
            ID:
            <input id="taskID" />
          </label>
          <button type="submit">View Task</button>
        </form>
        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewTask;
