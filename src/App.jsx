import { useState,useEffect } from 'react';
import { ethers } from 'ethers'
import abi from './contractJson/TodoLists.json';

import Navbar from './Sidenavbar/Sidebar';
import Home from './Todosection/TodoList';

function App() {
  const [state, setState] = useState({provider:null,signer:null,contract:null});
  const [account,setAccount]=useState('Not connected');
  const [signer,setSigner]=useState(null);
 

  

  useEffect(()=>{
     const template= async()=>{
          const contractAddress = "0x0f46ec23f8a3e8496d66e285b744f918ef28e0c2";
          const contractABI = abi.abi;

          // code to connect to metamask
          // metamask is used for following:-
          // 1. In order do transactions on goerli test n/w
          //2. metamask consists of infura api which helps to connect to the blockchain

          try{
          const {ethereum}=window;

          const account= await ethereum.request({
            method:"eth_requestAccounts"
          });

          window.ethereum.on("accountsChanged",()=>{
            window.location.reload();
          })
          setAccount(account);
          const provider = new ethers.providers.Web3Provider(ethereum); // read the blockchain
         const signer = await provider.getSigner(); // write the blockchain
          
          // console.log(signer.getAddress());
          const contract= new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          
          
          setState({provider,signer,contract});
          
          // console.log("this a state",state);
          // console.log(contract);
        }
        catch(error){
          alert(error);
        }
     }
     
template();
  },[])
  return (
    <div className="App">
    
    <div className="top_address" style={{color:"white"}}>
        <center>{account}</center>
      </div>
      <div className="main-content">
      <Navbar/>
      
      <Home state={state} />
       </div>
    </div>
  )
}

export default App
//0xcBFCe0B08196677E32e14cf4fc12D801bAB0f34A