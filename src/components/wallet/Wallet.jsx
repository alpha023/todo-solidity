import React, { useState } from "react";
import Web3 from "web3";
import ABI from './../abi/ABI.json';
import { useNavigate } from "react-router-dom";
import {CONTRACT_ABI,CONTRACT_ADDRESS} from "./../../constants/ContractConstants";
import Navigation from "../navigation/Navigation";

const Wallet = ({saveState}) => {

  const navigateTo=useNavigate();
  // const [state,setState]=useState({web3:null,contract:null,account:null});

  // const saveState=({web3,contract,account})=>{
  //   setState({web3:web3,contract:contract,account:account});
  // };
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // const contractAddress = "0x809883c4cd80b098ba142d52eF408c06CCE58A57"; //deployed contract address
        const contract = new web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
        saveState({web3:web3,contract:contract,account:accounts[0]});
        navigateTo("/view-all-tasks");
      } else {
        throw new Error("Please install MetaMask");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    {/* <Navigation/>
      <button onClick={connectWallet}>Connect To Wallet...</button> */}

      <div className="wallet_header">
        <span>WELCOME TO</span><p>TODO || ALPHA 3.O</p>
      </div>
      <div className="connect_wallet_section todo_btn">
        <p>Please connect metamask wallet to access the app</p>
        <button onClick={connectWallet}>Connect Wallet</button>

      </div>


    </>
  );
};
// Wallet.prototype={
//   saveState:PropTypes.func.isRequired,
// }
export default Wallet;
