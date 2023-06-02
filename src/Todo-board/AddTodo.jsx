import './addtodo.css';
import {useState} from 'react';

const AddTodo = ({state, listid,uniqueid}) => {
   const [typingTitle,settypingTitle]=useState(false);
   const [typingDescription,settypingDescription]=useState(false);

   const Addtodo=async(event)=>{
    try{
      event.preventDefault();
      
      const {contract} = state;
      const titleid="#addtitle"+uniqueid;
      const descid = "#AddDescription"+uniqueid;
      const title = document.querySelector(titleid).value;
      const desc = document.querySelector(descid).value;

      const transaction = await contract.addTodo(listid,title,desc);
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
    return (
        <div className="AddTodo">
        <form onSubmit={Addtodo}>
        <div className="addtodo-form">
              <div className="input-container">
                <div className="addtodo-top">
                      <div className={'addtodo-money-bag'} style={
                        {background : 'linear-gradient(135deg, #BBB5E2 0%, #9C92DF 100%)'}
                      }>
                        <img alt = "mb" src="icons/mb.png"  />
                      </div>
                     <input type="text" placeholder='Add Todo' id={"addtitle"+uniqueid} onChange={()=>{settypingTitle(true)}} style={typingTitle?{color:"white"}:{color:"#6E6E6E"}} required/>
                 </div>
                <textarea name="desc" id={"AddDescription"+uniqueid} placeholder='Add Todo Description' onChange={()=>{settypingDescription(true)}} style={ typingDescription ?{color:"white"}:{color:"#808191"}}  required></textarea>
                </div>
                <button className="additem_btn">
            
                   <span className="plus_add">
                     +
                   </span>
                </button>
                </div>
              </form>
        </div>
     );
}
 
export default AddTodo;