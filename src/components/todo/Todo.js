import { useState } from "react";
import List from "./List";
import  "./todo.css"

export default function Todo() {
  const [ todo, setTodo ] = useState('');
  const [ todoList, setTodoList ] = useState([]);
 // const [ displayTodo, setDisplayTodo ] = useState();

  const handleChange = (event)=>{
    setTodo(event.target.value);
  
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
     let tempList = todoList;
     tempList.push(todo);
   setTodoList(tempList)
   setTodo('')

  
  }
  return (
    <div>
      <h1 className="header">Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange}>
        </input>
        <button type="submit"> Add</button>
      
      </form>
      <div><h3>Tasks added</h3>{todoList.map((todoItem)=>(<List key = {todoList.indexOf(todoItem)} name = {todoItem}></List>))}
       </div>
       </div>
  
  );
}