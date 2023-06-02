import './todo.css';
import { useState,useEffect } from 'react';

import Board from '../Todo-board/Boards';
import AddList from '../Todo-board/AddList';
import { ArrowLeft } from 'react-feather';
const Home = ({state}) => {
    const [Todos,setTodos] = useState([]);
    const {contract} = state;
    const [visible,setVisible]=useState(false);
    const [updatetodo,setUpdate]=useState([]);

    function addForm(itemobj){
      
       setVisible(true);
       setUpdate(itemobj);
    }
    
    useEffect(()=>{
       const TodoMessage=async()=>{
          
        try{
          const acc= contract.signer.getAddress();
          const todos=await contract.getTodos(acc);
        
          
          setTodos(todos);
          console.log("this is the todos",Todos);
        }catch(error){
          console.log(error);
        }
       }   
       
       contract && TodoMessage();
    },[contract]);
    
    
    const editForm=async(event)=>{
      try{
        event.preventDefault();
        const {contract} = state;

        const listid = updatetodo[0];
        let todotitle = document.querySelector("#update-title").value;
        if(todotitle===""){
          todotitle=updatetodo[1].title;
        }

        let tododescription = document.querySelector("#update-description").value;
        if(tododescription===""){
          console.log("desc")
          tododescription=updatetodo[1].description;
        }
        
        const transaction = await contract.updateTodo(updatetodo[1].id,listid,todotitle,tododescription);
        alert("Wait for while util you get success message");
        document.body.style.cursor = 'progress';
      await transaction.wait();
      document.body.style.cursor = 'auto';
        alert("transaction is successfully added ");
        window.location.reload();
        setVisible(false);
      }catch(error){
        alert(error);
      }
    }
    return (
        <div className="container">
        
        

         
            <div className="section-nav" >
             
                      <div className="section-heading">
                              <h2>Section</h2>
                      </div>
                       <div className="wallet-data">
                            <img src="icons/Wallet.png" alt="" />
                            <div className="w-content">0.2$XYZ</div>
                            <div className="tier">
                            <p>Tier 1</p></div>
                       </div>
            
                   
          
          </div>
            <div className="main" >
           
           <div className="board-container">
           {Todos.map((list)=>{
                  
                  return <Board state={state} addForm={addForm} listid={list.id} key={list.id} todos={list[1]} uniqueid={list.id}/>
              })}

              <AddList state={state}/>
            
           </div>
          {visible && <div className="form-drawer">
                
                 <div className="form-head">
                       <div className="arrow-img">
                       <ArrowLeft></ArrowLeft>
                          {/* <img src="icons/Path.png" alt="" /> */}
                       </div>
                       <div className="form-title">
                          Edit Todo
                       </div>
                 </div>
                 <div className="update-form">
                         <form onSubmit={(e)=>editForm(e)}>

                           <input type="text" className="" id="update-title" placeholder={updatetodo[1].title}  />
                           <textarea name=""  id="update-description" placeholder={updatetodo[1].description}></textarea>
                           <button>Save</button>
                         </form>
                 </div>
           </div>}
     
            </div>
            
        </div>
      );
}
 
export default Home;