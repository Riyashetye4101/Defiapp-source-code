import './boards.css';
import Card from './Cards';
import AddTodo from './AddTodo';
import { X } from 'react-feather';


const Board = ({state,listid,todos,uniqueid,addForm}) => {
    
   const dellist=async(event)=>{
    try{
    //   event.preventDefault();
      const {contract} = state;
      const transaction = await contract.removeList(listid);
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
        <div className='board'>
        <div className="board-top">
        <div className="board_title">
         <p>List : {listid}</p> 
        </div>
        <div className='cross'><X onClick={(e)=>{dellist(e)}}/></div>
        

        </div>
        <div className="board-cards custom-scroll-y">
            <AddTodo state={state} listid={listid} uniqueid={uniqueid} />

            
            {todos.length!==0 && todos.map((item,index)=>{
                return <Card state={state} addForm={addForm} listid={listid} key={index} ind={index} data={item}/>
            })}
        
            
            
            
        </div>
      </div>
     );
}
 
export default Board;