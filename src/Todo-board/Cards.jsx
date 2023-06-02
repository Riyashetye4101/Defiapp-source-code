import './card.css';
import { useState } from 'react';
import {X} from 'react-feather';

const Card = ({state,listid,ind,data,addForm}) => {
  const [iseditClick,StateEdit] = useState(false);
  
 
  
  const deltodo=async()=>{
    try{
    
      const {contract} = state;
      
      const transaction = await contract.deleteTodo(data.id,listid);
      alert("Wait for while util you get success message");
      document.body.style.cursor = 'progress';
      await transaction.wait();
      document.body.style.cursor = 'auto';
      alert("transaction is successfully added ");
      window.location.reload();
      
    }catch(error){
      alert(error);
    }
  }

  const done=async()=>{
    try{
    
      const {contract} = state;
      
      const transaction = await contract.Completed(data.id,listid);
      alert("Wait for while util you get success message");
      document.body.style.cursor = 'progress';
      await transaction.wait();
      document.body.style.cursor = 'auto';
      alert("transaction is successfully added ");
      

      window.location.reload();
    }catch(error){
      alert(error);
    }
  }
  function edittodo(){
    StateEdit(!iseditClick);
    
    addForm([listid,data]);
  }
    return (
        <div className="card" key={ind}>
              <div className="card-top">
                <div className="card-labels">
                      <div className="card-title" >
                      <div onClick={()=>{done()}} className={'money-bag'} style={
                        data.isDone?{background : 'linear-gradient(135deg, #BBB5E2 0%, #9C92DF 100%)'}:{background : 'linear-gradient(135deg, gray 0%,#353945 100%)'}
                      }>
                        <img alt = "isDone icon" title={data.isDone?"Done":"click if done"} src="icons/mb.png"  />
                      </div>
                     <p> {data.title} </p>
                    </div>
                </div>
                <X alt="delete" onClick={()=>{deltodo()}} title="remove todo"/>
              <span class='edit-btn-x'>  <img alt="edit btn" title="edit todo" onClick={()=>edittodo()} src="icons/edit.png" className='edit-btn'></img>
              </span>
              </div>
             
              <div className="card-footer">
               <p>{data.description}</p>
              </div>
        </div>
     );
}
 
export default Card;