const {contract}=require("../contract/Contract");
const dateClashCheck = async (taskDate) => {
  try {
    console.log("inside date clash check")
    
    const tasks = await contract.methods.getAllTasks().call();
    console.log(tasks)
    const clashedTask = tasks.find((task) => {
      return task.date === taskDate;
    });
  
    let data = { clash: false, clashedTask: clashedTask };
    if (tasks && clashedTask) {
      data.clash=true;
      return data;
    }
    data.clash = false;
    return data;
  } catch (error) {
    console.log(error.message)
  }
    
  };

  const priorityCheck=async()=>{

    //TODO for deleteion operation

  }
  module.exports={dateClashCheck,priorityCheck};