import React from 'react';
import Wallet from './../components/wallet/Wallet';
import Home from './../components/pages/home/Home';
import CreateTask from './../components/create-task/CreateTask';
import ViewAllTasks from './../components/view-all-tasks/ViewAllTasks';
import UpdateTask from './../components/update-task/UpdateTask';
import ViewTask from './../components/view-task/ViewTask';
import DeleteTask from './../components/delete-task/DeleteTask';
import {createBrowserRouter} from 'react-router-dom';

const router=createBrowserRouter([
    {path:'/',element:<Wallet/>},
    {path:'/dashboard',element:<Home/>},
    {path:'/view-all-tasks',element:<ViewAllTasks/>},
    {path:'/create-task',element:<CreateTask/>},
    {path:'/delete-task',element:<DeleteTask/>},
    {path:'/view-task',element:<ViewTask/>},
    {path:'/update-task',element:<UpdateTask/>}
    
  ]);

//   module.exports=router;
export default router;