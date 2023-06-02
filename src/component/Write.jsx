const Write= ({state}) => {
    const AddList = async(event)=>{
        event.preventDefault();
        try{
        const {contract} = state;
        const listid = document.querySelector("#ListId").value;
        
    
        const transaction = await contract.addList(listid);
        await transaction.wait();
        alert("transaction is successfully added ",listid);
        
        window.location.reload();
        }catch(error){
            alert(error);
        }
    }
    const Addtodo=async(event)=>{
      try{
        event.preventDefault();
        const {contract} = state;
        const listid = document.querySelector("#todoid").value;
        const title = document.querySelector("#title").value;
        const desc = document.querySelector("#desc").value;

    
        const transaction = await contract.addTodo(listid,title,desc);
        await transaction.wait();
        alert("transaction is successfully added ");
      }catch(error){
        alert(error);
      }
    }
    return ( 
        <div className="write">
           <form onSubmit={AddList}>
               <label>Add TodoList</label>
               <input type="text" id="ListId" />
               <button>addlist</button>
           </form>
           <form onSubmit={Addtodo}>
            <label>Add todo</label>
            <input type="text" className="" id="todoid" />
            <input type="text" className="" id="title" />
            <input type="text" id="desc" />
            <button>Addtodo</button>
           </form>
        </div>
     );
}
 
export default Write;