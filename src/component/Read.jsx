import {useState,useEffect} from 'react';
import {ethers} from 'ethers';
const Read = ({state}) => {
    
    const [Todos,setTodos]=useState([]);
    const {contract}=state;
    useEffect(()=>{
         const todoMessage=async()=>{
            const acc= await contract.signer.getAddress();
            
            const todos=await contract.getTodos(acc);
            console.log(acc);
            // alert(acc);
            setTodos(todos);
            console.log("this is the todo",Todos);
            

         }
         contract && todoMessage();
    },[contract]);
    return ( 
        <div className="read">
        <h2>Content</h2>
               
                {Todos.map((list)=>{
                return <div >
                <p>{list[0]} :
                      {list[1].map((item)=>{
                        return <div>
                            <p>{item.title} , {item.description}, {item.id}</p>
                        </div>
                      })}
                </p>
                </div>
            })}
               
        </div>
     );
}
 
export default Read;