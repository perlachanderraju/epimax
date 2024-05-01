import React from 'react';
import "./index.css"
const TaskItem = ({ task, updateTaskStatus }) => {
  const { id, taskName, description, dueDate, assignee, status } = task;

  const handleStatusChange = (newStatus) => {
    updateTaskStatus(id, newStatus);
  }

  return (
    <div className='div1'>
      <h3>TaskName:{taskName}</h3>
      <p>Description:{description}</p>
      <p>Due Date: {dueDate}</p>
      <p>Assignee: {assignee}</p>
      <p>Status: {status}</p>
      <button onClick={() => handleStatusChange('Started')} className={status==="Started" ? "startbtn":"btn"}>Start</button>
      <button onClick={() => handleStatusChange('Completed')} className={status==="Completed" ? "completebtn":"btn"}>Complete</button>
    </div>
  );
}

export default TaskItem;
