const {dateClashCheck,priorityCheck}=require("../helpers/taskHelpers");
const {contract}=require("../contract/Contract");
const createTask = async (req, res) => {
  // res.status(200).json({msg:"All Ol"})
  console.log("In post ");
  const { taskDate } = req.body;
  console.log(taskDate);
  const result = await dateClashCheck(taskDate);
  console.log(result);

  try {
    if (!result.clash) {
      res.status(200).json({
        status: 200,
        canCreate: true,
        message: "Task Can Be Created...",
      });
    } else {
      res.status(409).json({
        status: 409,
        message: "Task already-exists with the same date...",
        canCreate: false,
      });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
const updateTask = async (req, res) => {
  const { taskDate } = req.body;
  const result = await dateClashCheck(taskDate);

  try {
    if (!result.clash) {
      res.status(200).json({
        status: 200,
        canUpdate: true,
        message: "Task Can Be Updated...",
      });
    } else {
      res.status(409).json({
        status: 409,
        message: "Task already-exists with the same date...",
        canUpdate: false,
      });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const viewTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await contract.methods.getTask(taskId).call();
    const { id, title, date, description, status } = task;
    const taskObj = {
      id: Number(id),
      title,
      date,
      description,
      status,
    };
    res.status(200).json({ status: 200, task: taskObj, msg: "Task-Exists" });
  } catch (error) {
    res.status(404).json({ status: 404, msg: "Task Not Found!!!!" });
  }
};
const viewAllTask = async (req, res) => {
  try {
    const tasks = await contract.methods.getAllTasks().call();
    if (tasks.length > 0) {
      const taskList = tasks.map((task) => {
        return {
          id: Number(task.id),
          title: task.title,
          description: task.description,
          status: task.status,
          date: task.date,
        };
      });
      res.status(200).json({ status: 200, data: taskList });
    }
    if (tasks.length <= 0) {
      res.status(404).json({ msg: "tasks Not Found" });
    }
    // res.status(200).json({ data: tasks, status: 200, msg: "TaskExists" });
  } catch (error) {
    res
      .status(404)
      .json({ status: 404, msg: "Something Went Wrong", error: error.message });
  }
};

const deleteTask = async (req, res) => {
    const {taskId}=req.params;
    try {
      const res= await contract.methods.deleteTask(taskId);
      res.status(200).json({msg:"Task is Already Deleted..."})
    } catch (error) {
      res.status(400).json({msg:error.message,status:400})
      
    }
};

module.exports={createTask,updateTask,viewAllTask,viewTask,deleteTask};