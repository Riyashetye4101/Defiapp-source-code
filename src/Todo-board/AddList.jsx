import './addlist.css';
import { useState } from 'react';
const AddList = ({state}) => {
    
    const [typing,setTyping] = useState(false);

    const AddList = async(event)=>{
        event.preventDefault();
        try{
        const {contract} = state;
        const listid = document.querySelector("#AddListID").value;
        
    
        const transaction = await contract.addList(listid);
        
        alert("Wait for while util you get success message");
        document.body.style.cursor = 'progress';
      await transaction.wait();
      document.body.style.cursor = 'auto';
        alert("transaction is successfully added ",listid);
        
        window.location.reload();
        }catch(error){
            alert(error);
        }
    }
    return ( 
        <div className="addlist">
            <div className="board-top">
            
             <form onSubmit={AddList}>
                   <input onChange={()=>{setTyping(true);}} type="text" style={typing?{color:"white"}:{color:'#6C6C6C'}} className="addlist_XP" id="AddListID" placeholder='ADD TODO LIST' required/>
                   <button className='list-btn'>
                    <img src="icons/white add.png" alt="add" />
                   </button>
             </form>
                
                
            
              
            </div>
        </div>
     );
}
 
export default AddList;