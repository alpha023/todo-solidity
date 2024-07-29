import React from 'react'
import Navigation from '../navigation/Navigation'
import {SERVER_URL} from '../../constants/ServerConstants';

const UpdateTask = ({state}) => {
  const {account,contract}=state;
  const updateTask=async (event)=>{

    event.preventDefault();
    const taskName=document.querySelector('#taskName').value;
    const taskId=document.querySelector('#taskID').value;
    const taskDescription=document.querySelector('#taskDescription').value;
    const taskDate=document.querySelector('#taskDate').value;
    const taskStatus=document.querySelector('#taskStatus').value;

    try {
      const res = await fetch(`${SERVER_URL}/api/ethereum/update-task`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({taskDate:taskDate})
      });
      const data=await res.json();
      if(data.canUpdate==true){
        console.log(data.canUpdate,contract)
        if(contract && contract.methods){
          try {
            // console.log("connnntracct")
            const newTask={id:taskId,title:taskName,description:taskDescription,status:taskStatus,date:taskDate};
            console.log(newTask,account,contract)
            await contract.methods.updateTask(taskId,newTask).send({from:account});
            // console.log(object)
            alert("Task Is Updated...");
          } catch (error) {
            console.log(error.message)
            
          }
         
        }
      }else{
        alert("date Clash...");
        throw new Error("Task already exists with the provided date...")
      }
    } catch (error) {
      console.log(error.message)
      
    }

  }
  return (
    <>
     <Navigation/> 
     <form onSubmit={updateTask}>

      <label>ID:
        <input id='taskID'/>
      </label>
      <label>Task Name:
        <input id='taskName'/>
      </label>
      <label>Description:
        <input id='taskDescription'/>
      </label>
      <label>Status:
        <input id='taskStatus'/>
      </label>
      <label>Date:
        <input id='taskDate' type='date'/>
      </label>

      <button type='submit'>Update Task</button>

     </form>
    </>
  )
}

export default UpdateTask
