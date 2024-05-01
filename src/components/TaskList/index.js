import React, { Component } from 'react';
import TaskForm from '../TaskForm';
import TaskItem from '../TaskItem';
import "./index.css"
class TaskList extends Component {
    
  render() {
    const { tasks, users, addTask, updateTaskStatus } = this.props;

    return (
      <div>
        <h2>Task List</h2>
        <TaskForm users={users} addTask={addTask} />
        <div className='flexing'>
            {tasks.map(task => (
            <TaskItem 
                key={task.id} 
                task={task} 
                updateTaskStatus={updateTaskStatus} 
            />
            ))}
        </div>
      </div>
    );
  }
}

export default TaskList;
