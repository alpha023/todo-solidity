import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wallet from "./components/wallet/Wallet";
import Home from "./components/pages/home/Home";
import CreateTask from "./components/create-task/CreateTask";
import ViewAllTasks from "./components/view-all-tasks/ViewAllTasks";
import UpdateTask from "./components/update-task/UpdateTask";
import ViewTask from "./components/view-task/ViewTask";
import DeleteTask from "./components/delete-task/DeleteTask";
import './App.css';

const App = () => {

  const [state, setState] = useState({
    web3: null,
    contract: null,
    account: null,
  });

  const saveState = ({ web3, contract, account }) => {
    setState({ web3: web3, contract: contract, account: account });
  };

  const router = createBrowserRouter([
    { path: "/", element: <Wallet saveState={saveState} /> },
    { path: "/dashboard", element: <Home /> },
    { path: "/view-all-tasks", element: <ViewAllTasks /> },
    { path: "/create-task", element: <CreateTask state={state}/> },
    { path: "/delete-task", element: <DeleteTask state={state} /> },
    { path: "/view-task", element: <ViewTask /> },
    { path: "/update-task", element: <UpdateTask state={state}/> }
  ]);

  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

// import { EthProvider } from "./contexts/EthContext";
// import Intro from "./components/Intro/";
// import Setup from "./components/Setup";
// import Demo from "./components/Demo";
// import Footer from "./components/Footer";
// import { useState, useEffect, useCallback } from "react";
// import Web3 from "web3";

// function App() {
//   const [currentName, setCurrentName] = useState("");
//   const [nameList, setNameList] = useState([]);
//   // const [showName, setShowName] = useState(false);
//   const [contract, setContract] = useState(null);
//   const [accounts, setAccounts] = useState(null);
//   useEffect(() => {
//     const tryInit = async () => {
//       try {
//         const artifact = require("./contracts/Name.json");
//           if (artifact) {
//             const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545");
//             setAccounts(await web3.eth.requestAccounts());
//             const networkID = await web3.eth.net.getId();
//             const { abi } = artifact;
//             let address;
//             try {
//               address = artifact.networks[networkID].address;

//               setContract(new web3.eth.Contract(abi, address));
//             } catch (err) {
//               console.error(err);
//             }
//           }

//       } catch (err) {
//         console.error(err);
//       }
//     };

//     tryInit();
//   }, []);

//   const handleClick = (e) => {
//     setCurrentName(e.target.value);
//   };
//   const handleButtonClick = async () => {
//     const res=await contract?.methods.getNames().call({ from: accounts[0] });
//     console.log(res);
//     setNameList(res);
//   };
//   const submitName = async () => {
//     const r=await contract?.methods.addName(currentName).send({ from: accounts[0] });
//     console.log(r)
//   };
//   return (
//     // <EthProvider>
//     //   <div id="App">
//     //     <div className="container">
//     //       <Intro />
//     //       <hr />
//     //       <Setup />
//     //       <hr />
//     //       <Demo />
//     //       <hr />
//     //       <Footer />
//     //     </div>
//     //   </div>
//     // </EthProvider>
//     <>
//       <div>
//         <label>Enter Your Name Here...</label>
//         <input onChange={(e) => handleClick(e)} vlaue={currentName}></input>
//         <button onClick={submitName}>Add Name +</button>
//         <button onClick={handleButtonClick}>Show Names</button>

//         {nameList?.length > 0 && (
//           <ul>
//             {nameList.map((e) => {
//               return <li>{e}</li>;
//             })}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
