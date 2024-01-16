import { useState } from "react";
import "./App.css";

let App = () => {
  let [text, setText] = useState("");
  let [todo, setTodo] = useState([]);
  let [id,setId] = useState("")

  let handleChange = (data) => {
    setText(data.target.value);                         //get value to input
  }; 


  let handleClick = () => {
    if(text != ""){
      setTodo((prevTodo) => [...prevTodo, text]);        // Add the 'text' to the 'todo' array using spread operator
      setText('');                                      // Clear the input field.
    }  
  };


  let handleDelete = (id) => {
    let UpdateTodo = todo.filter((item,index) => index != id)   //create new array without removing id
    setTodo(UpdateTodo)
  }


  let handleEdit = (itemValue,id) => {
    
    setText(itemValue)         // age empty cilo akon new value diye dila (line = 17)
    setId(id)                  // id store to the index of the todo being edited
  
  }

  let handleUpdate = () =>{
    
    let editTodo = [...todo]     // Create a shallow copy of the 'todo' array
    editTodo[id] = text;        // Update the element at the specified 'id' with the new 'text'
    setTodo(editTodo);          // Update the 'todo' state with the modified array
    setText("");                // Clear the input field
  }

 // console.log(todo);

  return (
    <div className="main tanvir">
      <div className="row">
        <div className="col-md-5">
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="todo" 
              onChange={handleChange} 
              value={text} 
            />
            <button 
              className="btn btn-outline-secondary addBtn" 
              type="button" 
              onClick={handleClick}
            >
              Add
            </button>
            <button 
              className="btn btn-outline-secondary addBtn" 
              type="button" 
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div> 
      </div>

      <div className="row">
        <div className="col-md-5">
          <ul className="list-group">
            {todo.map((item, index) => (
              <li key={index} className="list-group-item">
                {item}
                <button type="button" className="btn btn-primary btn-sm ms-3 editBtn" onClick={()=> handleEdit(item,index)}>edit</button>
                <button type="button" className="btn btn-danger btn-sm deleteBtn" onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
