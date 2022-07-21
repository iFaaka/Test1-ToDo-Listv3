import React, { useEffect, useState } from 'react'
import { Form } from './Form'
import { TaskList } from './TaskList'
import './stylesheets/ToDoList.css'


export const ToDoList = () => {
  
  const [task, setTask] = useState([])

  useEffect(() => {
  setTask(JSON.parse(localStorage.getItem('userTask')))
}, [])

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('userTask',JSON.stringify(task))
    }, 100);
  }, [task])


  return (
    <div className='app-container bg-light border-secondary pe-3 ps-3 pb-5 pt-2'>
        <h1 className='a'>Mi lista de tareas</h1>

        <Form onSubmit={setTask} />
        <TaskList setTask={setTask} task={task}/>
        <button className='btn btn-danger'
          onClick={() => setTask([])}>Eliminar todas las tareas</button>
    </div>
  )
}
