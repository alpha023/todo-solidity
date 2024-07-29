const { Web3 } = require("web3");
const fs = require("fs");
const path = require("path");


const web3 = new Web3("http://127.0.0.1:7545");
//============
const ABI = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../abi/TODO.json"), "utf8")
).abi;
const contractAddress = "0x3f2B7484DeB7F1E23097DDc9946f275172EFadF2"; //deployed contract address
// const contractAddress = "0x09Ab9DB180287C12B2Db19c75F6560749830a7Ae"; //deployed contract address
const contract = new web3.eth.Contract(ABI, contractAddress);
//==========

module.exports={contract};