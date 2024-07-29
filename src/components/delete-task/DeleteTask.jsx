import React, { useState } from "react";
import Navigation from "../navigation/Navigation";
// import CONTRACT from "./../../constants/ContractConstants";
import SERVER from "../../constants/ServerConstants";
import { getCurrentDate } from "../../utils/Utils";
import "./delete-task.css";

const DeleteTask = ({ state }) => {
  const { contract, account } = state;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const closeModal = () => {
    setModalOpen(false);
    setModalContent("");
  };
  const deleteTask = async (event) => {
    try {
      event.preventDefault();
      const taskId = document.querySelector("#taskID").value;
      await contract.methods.deleteTask(taskId).send({ from: account });
      setModalContent(`Task ID ${taskId} deleted at ${getCurrentDate()}`);
    } catch (error) {
      setModalContent(`No Such Task Exists...`);
      console.log(error.message);
    } finally {
      setModalOpen(true);
    }
  };
  return (
    <div className="delete-task-container">  
      <Navigation />
      <form onSubmit={deleteTask}>
        <label className="delete-task-label">
            ID:
            <input id="taskID" type='number'/>
          </label>
        
        {/* <input type="text" id="taskID" /> */}
        {/* <button type="submit">Delete Task</button> */}
        <button type="submit" className="button-82-pushable" role="button">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">Delete Task !!</span>
        </button>
      </form>
      {modalOpen && (
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
  );
};

export default DeleteTask;
