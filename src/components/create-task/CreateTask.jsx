import React, { useState } from "react";
import { SERVER_URL } from "../../constants/ServerConstants";
import Navigation from "../navigation/Navigation";
const CreateTask = ({ state }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const closeModal = () => {
    setModalOpen(false);
    setModalContent("");
  };

  const createTask = async (event) => {
    event.preventDefault();
    const { contract, account } = state;
    const taskName = document.querySelector("#taskName").value;
    const taskDescription = document.querySelector("#taskDescription").value;
    const taskDate = document.querySelector("#taskDate").value;
    const taskStatus = document.querySelector("#taskStatus").value;

    try {
      console.log("1111111");
      console.log(JSON.stringify({ taskDate: taskDate }));
      const res = await fetch(
        `${SERVER_URL}/api/ethereum/create-task`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ taskDate: taskDate }),
        }
      );
      console.log(res, "0000000000");
      const data = await res.json();
      console.log(data.data, "xxxxxxxxxxxxx");

      if (data.canCreate == true) {
        console.log(data.canCreate, contract);
        if (contract && contract.methods) {
          try {
            console.log("connnntracct");
            const addedTask = {
              title: taskName,
              description: taskDescription,
              status: taskStatus,
              date: taskDate,
            };
            console.log(addedTask, account, contract);
            await contract.methods
              .createTask({
                id: 1,
                title: taskName,
                description: taskDescription,
                status: taskStatus,
                date: taskDate,
              })
              .send({ from: account });
            // await contract.methods
            //   .createTask(taskName)
            //   .send({ from: account });
              setModalContent(`Task ${taskName} added at ${taskDate}`)
            // console.log(object)
            alert("Task Is Added...");
          } catch (error) {
            setModalContent(`Task already exists with given date`)
            console.log(error.message);
          }finally{
            setModalOpen(true);
          }
        }
      } else {
        alert("date Clash...");
      }
    } catch (error) {
      console.log(error, "from post");
      console.log(error.message)
    }
  };
  return (
    <>
      <Navigation />
      <div className="create_task todo_btn">
        <form onSubmit={createTask}>
          <label>
            Title:
            <input id="taskName" placeholder="title" />
          </label>

          <label>
            Description:
            <input id="taskDescription" placeholder="description" />
          </label>

          <label>
            Date:
            <input id="taskDate" type="date" />
          </label>
          <label>
            Status:
            <input id="taskStatus" placeholder="status"/>
          </label>
          <button type="submit">Create Task</button>
        </form>
        {
          modalOpen&&(
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p>{modalContent}</p>

              </div>

            </div>
          )
        }
      </div>
    </>
  );
};

export default CreateTask;
