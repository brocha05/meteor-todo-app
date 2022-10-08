import React from 'react'

export const Tasks = ({tasks}) => {
  return (
    <>
        <ul>
            {tasks.map( task => {
               return <li key={task._id}>{ task.text }</li>
            })} 
        </ul>
    </>
  )
}
