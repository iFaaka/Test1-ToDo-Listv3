import React, { useEffect, useState } from 'react'
import { Form } from './Form'
import { TaskList } from './TaskList'

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
    <div className='app-container'>
        <h1>Mi lista de tareas</h1>
        <Form onSubmit={setTask} />
        <TaskList setTask={setTask} task={task}/>
    </div>
  )
}
