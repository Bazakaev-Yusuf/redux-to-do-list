 function TodoForm({text, handleSub, handleChange}) {
   const handleSubmite = (e) => {
      e.preventDefault()
   }
   return(
      
         <form class="input-group mb-3" onSubmit={handleSubmite}>
            <button class="btn btn-outline-primary" onClick={handleSub}>
               Add
            </button>
            <input type="text" value={text} onChange={handleChange} class="form-control" placeholder="text..."/>
         </form>
   )
 }
 export default TodoForm;