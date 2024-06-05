import React, {useRef, useState} from 'react'

function App(){
  // Components
  const list = []
  // HOOK REACT
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [popup, setPopup] = useState(false)
  const [msg, setMsg] = useState('')
  // Function
  const getInput = ()=>{
    if(task !=''){
      if(tasks.includes(task)){
        setMsg("You have typed the same task! Please enter the other one.")
      }
      else{
        setTasks(prev => [...prev, task])
        setTask('')
        setMsg("")
      }
    }
    else{
      setMsg("You haven't typed anything! Please enter your note.")
    }
  }
  const handleEnter = (key)=>{
    if(key === "Enter"){
      getInput();
    }
  }
  const onDel = (kw)=>{
    setTasks(prev => prev.filter(item => item != kw))
  }
  const onDelConfirm = ()=>{
    setPopup(!popup);
  }
  const onDelAll = ()=>{
    setTasks([])
    setPopup(!popup)
  }
  return(
    <React.Fragment>
      <div className='container'>
        <div className='d-flex justify-content-center my-3'>
          <h1>To-Do List</h1>
        </div>
        <label>Type your task</label>
        <div className='input-group'>
          <input onKeyDown={(e)=>handleEnter(e.key)} value={task} onChange={e => setTask(e.target.value)} className='form-control'></input>
          <button onClick={()=>getInput()} className='btn btn-primary'>Create</button>
        </div>
        <p className='my-2 text-danger'>{msg}</p>
        <div className='mt-3'>
          <strong><h4>Here is your task</h4></strong>
          <ul className='list-group'>
            {tasks.map(item => <li className='list-group-item'><i onClick={()=>onDel(item)} className='me-3 fas text-danger fa-trash'></i>{item}</li>)}
          </ul>
          {tasks.length > 1 &&
          <div className='d-flex justify-content-end mt-3'>
            <button onClick={() =>onDelConfirm()} className='btn btn-danger'>Clear All</button>
          </div>}
        </div>
      </div>
      {
        popup === true && 
        <div id='modal-fake' className='container-fluid bg-dark'>
          <div className='mt-5 container p-0 bg-white'>
            <div className='modal-header bg-danger text-white'>
              <h4>DO YOU WANT TO CLEAR ALL THE TASK</h4>
            </div>
            <div className='modal-body'>
              This action can not be reversed!
            </div>
            <div className='modal-action px-3 py-4 d-flex justify-content-end'>
              <button className='btn btn-light border me-3' onClick={onDelConfirm}>Cancel</button>
              <button className='btn btn-danger' onClick={()=>onDelAll()}>Clear</button>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  )
}
export default App;

