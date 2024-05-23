import React, { useState } from 'react';
import './App.css';


function App() {
  const [task, setTask] = useState();
  const [status, setStatus] = useState();
  const [list, setList] = useState([]);
  const submit = (task) =>{
    if(task !== ""){
      if(!list.includes(task)){
        setList(prev => [...prev, task])
        setTask("");
        setStatus("");
      }
      else{
        setStatus("You typed the same task")
      }
    }
    else{
      setStatus("You have not type your task");
    }
  }
  const del = (item)=>{
    if(list.includes(item)){
      setList(prev => prev.filter(e => e != item))
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      submit(task);
    }
  };
  return (
    <React.Fragment>
      <div className='container'>
        <h1>This is a to-do list:</h1>
        <div>Type your task here:</div>
        <input value={task} onChange={e => setTask(e.target.value)} onKeyDown={handleKeyDown} className='form-control mb-2'/>
        <p className='text-danger'>{status}</p>
        <button className='btn btn-warning' onClick={()=>{submit(task)}}>Submit your tasks</button>
        <div className='mt-3'>
          <p>Here are your submit tasks:</p>
          <ul className='list-group'>
            {list.map(item => 
              <li className='d-inline list-group-item list-group-item-action'><i onClick={()=>del(item)} className='fas fa-trash text-danger mr-2'></i> {item}</li>
              )}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;