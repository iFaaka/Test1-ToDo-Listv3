import React from 'react'
import { Task } from './Task.jsx'
import './stylesheets/ListaDeTareas.css'


export const TaskList = ({ task,setTask }) => {
  
  const deleteTask = (id,e) => {
    e.stopPropagation();
    const filterTask = task.filter(item => item.id !== id)
    setTask(filterTask)
  }

  const completeTask = (id) => {
    

    const completeTaskList = task.map(item => {

      if(item.complete === false && item.id === id) {
        let newItem = {
          text: item.text,
          id:   item.id,
          complete: true,
        }
        return newItem
      } else if(item.complete === true  && item.id === id){
          let newItem = {
            text: item.text,
            id:   item.id,
            complete: false,
        }
        return newItem
      } else {
        return item
      }
      
    })

    setTask(completeTaskList)
   
  }
 
  return (
    <ul className={'list-group'}>
      {task.map(item => 
        <Task
          text={item.text}
          id={item.id}
          key={item.id}
          complete={item.complete}
          filter={deleteTask}
          completeTask={completeTask} />)}

    </ul>
  )
}
