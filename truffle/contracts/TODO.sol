
// pragma solidity ^0.8.0;

// contract TODO {
//     uint public taskCount = 0;
//     uint public taskId = 1;
//     address public owner;

//     struct Task {
//         uint id;
//         string title;
//         string description;
//         string status;
//         string date;
//     }

//     mapping(uint => Task) public tasks;

//     event TaskCreated(
//         uint id,
//         string title,
//         string description,
//         string status,
//         string date
//     );

//     event TaskUpdated(
//         uint id,
//         string title,
//         string description,
//         string status,
//         string date
//     );


//     modifier checkId(uint _id) {
//         require(_id != 0 && _id < taskId, "Invalid ID!!");
//         _;
//     }

//     // modifier onlyOwner() {
//     //     require(msg.sender == owner, "Only the owner can perform this action");
//     //     _;
//     // }

//     // constructor() {
//     //     owner = msg.sender;
//     // }

//     function createTask(Task memory _task) public  {
//         tasks[taskId] = Task(taskId, _task.title, _task.description, _task.status, _task.date);
//         emit TaskCreated(taskId, _task.title, _task.description, _task.status, _task.date);
//         taskId++;
//         taskCount++;
//     }

//     function updateTask(uint _id, Task memory _task) public checkId(_id) {
//         Task storage task = tasks[_id];
//         task.title = _task.title;
//         task.description = _task.description;
//         task.status = _task.status;
//         task.date = _task.date;
//         emit TaskUpdated(_id, _task.title, _task.description, _task.status, _task.date);
//     }

//     function getTask(uint _id) public view checkId(_id) returns (Task memory) {
//         return tasks[_id];
//     }

//     function getAllTasks() public view returns (Task[] memory) {
//         Task[] memory taskArray = new Task[](taskCount);
//         for (uint i = 1; i < taskId; i++) {
//             taskArray[i - 1] = tasks[i];
//         }
//         return taskArray;
//     }
//     function deleteTask(uint _id) public checkId(_id) {
//         delete tasks[_id];  // This will remove the task from the mapping
//         taskCount--;  // Decrement the task count
        
//     }
    
// }


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TODO {
    uint public taskCount = 0;
    uint public taskId = 1;
    address public owner;

    struct Task {
        uint id;
        string title;
        string description;
        string status;
        string date;
    }

    mapping(uint => Task) public tasks;

    event TaskCreated(
        uint id,
        string title,
        string description,
        string status,
        string date
    );

    event TaskUpdated(
        uint id,
        string title,
        string description,
        string status,
        string date
    );

    modifier checkId(uint _id) {
        require(_id != 0 && _id < taskId, "Invalid ID!!");
        _;
    }

    // modifier onlyOwner() {
    //     require(msg.sender == owner, "Only the owner can perform this action");
    //     _;
    // }

    constructor() {
        owner = msg.sender;
    }

    function createTask(Task memory _task) public  {
        tasks[taskId] = Task(taskId, _task.title, _task.description, _task.status, _task.date);
        emit TaskCreated(taskId, _task.title, _task.description, _task.status, _task.date);
        taskId++;
        taskCount++;
    }

    function updateTask(uint _id, Task memory _task) public checkId(_id) {
        Task storage task = tasks[_id];
        task.title = _task.title;
        task.description = _task.description;
        task.status = _task.status;
        task.date = _task.date;
        emit TaskUpdated(_id, _task.title, _task.description, _task.status, _task.date);
    }

    function getTask(uint _id) public view checkId(_id) returns (Task memory) {
        return tasks[_id];
    }

    function getAllTasks() public view returns (Task[] memory) {
        Task[] memory taskArray = new Task[](taskCount);
        for (uint i = 1; i < taskId; i++) {
            taskArray[i - 1] = tasks[i];
        }
        return taskArray;
    }

    function deleteTask(uint _id) public checkId(_id) {
        delete tasks[_id];  // This will remove the task from the mapping
        taskCount--;  // Decrement the task count
         
    }
    
}