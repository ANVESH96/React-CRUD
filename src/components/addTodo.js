import React,{render} from "react"

export const AddTodo =() =>{
    //  todoValue=(e)=>{
    //  console.log(e)
    // }
    function handleOnChange(e){
        console.log(e)
    }
            return(
                <div>
                <h2> Add Todo</h2>
                <form>
                <input type="text" name="todo" onChange={handleOnChange}/>
                <button>Add Todo</button>
                </form>
                </div>
           
            )
      
   
}