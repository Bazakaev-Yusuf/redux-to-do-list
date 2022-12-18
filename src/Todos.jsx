import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./TodoForm";

function Todos() {

   const [text, setText] = useState('');

   const todos = useSelector(state => state);

   const dispatch = useDispatch();

   const handleChange = (e) => {
      setText(e.target.value)
   }
   

   const handleSub = () => { 
      if(text){
         dispatch({
            type: 'add',
            name: text,
            id: Math.random().toString(10).substring(2, 8),
         })
      }
           
      
      setText('')
   }
   const istDone = (id) => {
      dispatch({
         type: 'check',
         payload: id,
      }) 
   }
   const handleDelete = (id) => {
      dispatch({
         type: 'delete',
         payload: id,
      })
   }
   return (
    <div className="container">
      <TodoForm text={text}
      handleChange={handleChange}
      handleSub={handleSub} />
      {todos.map((item) => {
         return(
            <ul key={item.id} className='list'>
               <li className={item.done? 'list-group-item done' : 'list-group-item'}>
                  {item.name}
               </li>
               <div className="btn-block">
                  <input type="checkbox" checked={item.done} onChange={() => istDone(item.id)}/>
                  <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>X</button>
               </div>
               
               
            </ul>
         )
      })}
    </div>
  );
}

export default Todos;