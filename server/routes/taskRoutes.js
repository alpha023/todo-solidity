const express=require('express');
const router=express.Router();

const {createTask,updateTask,viewAllTask,viewTask,deleteTask}=require("../controllers/taskControllers");

router.route('/create-task').post(createTask);
router.route('/update-task').post(updateTask);
router.route('/delete-task/:taskId').delete(deleteTask);
router.route('/view-task/:taskId').post(viewTask);
router.route('/view-all-tasks').get(viewAllTask);

module.exports=router;