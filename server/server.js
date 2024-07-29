
const express = require("express");
const app = express();
const cors = require("cors");
const {contract}=require("./contract/Contract");
const taskRoutes=require("./routes/taskRoutes");
// const ABI = require("../src/contracts/TODO.json");
app.use(cors());
// const {createTask,updateTask,viewAllTask,viewTask,deleteTask}=require("./controllers/taskControllers");
//body-parser
app.use(express.json());
app.use('/api/ethereum',taskRoutes);

// const { Web3 } = require("web3");

// const web3 = new Web3("http://127.0.0.1:7545");
// //============
// const ABI = JSON.parse(
//   fs.readFileSync(path.resolve(__dirname, "./abi/TODO.json"), "utf8")
// ).abi;
// const contractAddress = "0xD1f68Ad6Bbcd8D521Af663a6e9DC0B303B706F8b"; //deployed contract address
// // const contractAddress = "0x09Ab9DB180287C12B2Db19c75F6560749830a7Ae"; //deployed contract address
// const contract = new web3.eth.Contract(ABI, contractAddress);
// //==========

// const contractAddress = "0x0F3d328cd6566a06a2a6A28EB99384997bbba69B";

// const contract = new web3.eth.Contract(ABI.abi, contractAddress);
// console.log(contract)

// api/ethereum



// const dateClashCheck = async (taskDate) => {
//   const tasks = await contract.methods.getAllTasks().call();
//   const clashedTask = tasks.find((task) => {
//     return task.date === taskDate;
//   });

//   let data = { clash: false, clashedTask: clashedTask };
//   if (tasks && clashedTask) {
//     data.clash=true;
//     return data;
//   }
//   data.clash = false;
//   return data;
// };

// app.post("/api/ethereum/create-task", async (req, res) => {
//   // res.status(200).json({msg:"All Ol"})
//   console.log("In post ")
//   const { taskDate } = req.body;
//   console.log(taskDate);
//   const result = await dateClashCheck(taskDate);
//   console.log(result)

//   try {
//     if (!result.clash) {
//       res.status(200).json({ status: 200,canCreate:true, message: "Task Can Be Created..." });
//     } else {
//       res
//         .status(409)
//         .json({
//           status: 409,
//           message: "Task already-exists with the same date...",
//           canCreate:false
//         });
//     }
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
// });

//UPDATE TASK
// app.post('/api/ethereum/update-task',async(req,res)=>{
//   const { taskDate } = req.body;
//   const result = await dateClashCheck(taskDate);

//   try {
//     if (!result.clash) {
//       res.status(200).json({ status: 200,canUpdate:true, message: "Task Can Be Updated..." });
//     } else {
//       res
//         .status(409)
//         .json({
//           status: 409,
//           message: "Task already-exists with the same date...",
//           canUpdate:false
//         });
//     }
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
  
// })

// app.get("/api/ethereum/view-task/:taskId", async (req, res) => {
//   try {
//     const { taskId } = req.params;
//     const task = await contract.methods.getTask(taskId).call();
//     const { id, title, date, description, status } = task;
//     const taskObj = {
//       id: Number(id),
//       title,
//       date,
//       description,
//       status,
//     };
//     res.status(200).json({ status: 200, task: taskObj, msg: "Task-Exists" });
//   } catch (error) {
//     res.status(404).json({ status: 404, msg: "Task Not Found!!!!" });
//   }
// });

//get all TASKS
// app.get("/api/ethereum/view-all-tasks", async (req, res) => {
//   try {
//     const tasks = await contract.methods.getAllTasks().call();
//     if (tasks.length > 0) {
//       const taskList = tasks.map((task) => {
//         return { id: Number(task.id),title:task.title,description:task.description,status:task.status,date:task.date };
//       });
//       res.status(200).json({ status: 200, data: taskList });
//     }
//     if (tasks.length <= 0) {
//       res.status(404).json({ msg: "tasks Not Found" });
//     }
//     // res.status(200).json({ data: tasks, status: 200, msg: "TaskExists" });
//   } catch (error) {
//     res
//       .status(404)
//       .json({ status: 404, msg: "Something Went Wrong", error: error.message });
//   }
// });

// app.delete("/api/ethereum/delete-task/:taskId",async(req,res)=>{
//     //priority check krke hi delete krna h
//     // agrr priority jyada h the dont delete till its priority gets updated

//     // TODO
// });

// const viewTask = async () => {
//   // await contract.methods.createTask({
//   //     taskId:2,
//   //     title:"Solidity",
//   //     description:"Hello",
//   //     status:"Done",
//   //     date:"19/07/2003"

//   // }).call();
//   try {
//     const msg = await contract.methods.test().call();
//     console.log(msg);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Running At PORT : ${PORT}`);
});

// viewTask();
