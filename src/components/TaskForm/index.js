
import React, { Component } from 'react';
import './index.css'
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      description: '',
      dueDate: '',
      assignee: '',
      error: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: '',
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { taskName, description, dueDate, assignee } = this.state;

    // Simple validation
    if (!taskName || !description || !dueDate || !assignee) {
      this.setState({ error: 'All fields are required' });
      return;
    }

    // Generate unique ID for task
    const taskId = Math.floor(Math.random() * 1000);

    // Add task
    this.props.addTask({
      id: taskId,
      taskName,
      description,
      dueDate,
      assignee,
      status: 'Pending', // Initial status
    });

    // Clear form
    this.setState({
      taskName: '',
      description: '',
      dueDate: '',
      assignee: '',
      error: '',
    });
  }

  render() {
    const { taskName, description, dueDate, assignee, error } = this.state;
    const { users } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className='fomdiv'>
          <div >
            <input 
              type="text" 
              placeholder="Task Name" 
              name="taskName" 
              value={taskName} 
              onChange={this.handleChange} 
              className='input'
            />
            <input 
              type="text" 
              placeholder="Description" 
              name="description" 
              value={description} 
              onChange={this.handleChange} 
              className='input'
            />
            <input 
              type="date" 
              placeholder="Due Date" 
              name="dueDate" 
              value={dueDate} 
              onChange={this.handleChange} 
              className='input'
            />
            <select 
              name="assignee" 
              value={assignee} 
              onChange={this.handleChange} 
              className='input'
            >
              <option value="">Select Assignee</option>
              {users.map(user => (
                <option key={user} value={user}>{user}</option>
              ))}
            </select>
          </div>
          <div className='fom'>
            <button type="submit" className='addbtn'>Add Task</button>
          </div>
          
        </form>
        {error && <p className='errormsg'>{error}</p>}
      </div>
    );
  }
}

export default TaskForm;
