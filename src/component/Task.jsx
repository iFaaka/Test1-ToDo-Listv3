import React from 'react'
import './stylesheets/Task.css'
import { MdDelete } from "react-icons/md";

export const Task = ({ text,id,complete,filter,completeTask }) => {
  
  
  return (
    <div 
    className={` ${complete === true ? 'active' : ''}
    task-container list-group-item`}
    onClick= {() => completeTask(id)}>
        
    <p>{text}</p>
    <MdDelete className='ico' onClick={(e) => filter(id,e)}/>

  </div>
  )
}
