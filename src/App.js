
import React, { Component } from 'react';
import TaskList from './components/TaskList';
import TaskSummaryPage from './components/TaskSummaryPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      users: ['User 1', 'User 2', 'User 3'], // Sample users
    };
  }

  // Function to add a new task
  addTask = (task) => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
    }));
  }

  // Function to update task status
  updateTaskStatus = (taskId, status) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, status: status } : task
      ),
    }));
  }

  render() {
    return (
      <div className="App">
        <TaskList 
          tasks={this.state.tasks} 
          users={this.state.users} 
          addTask={this.addTask} 
          updateTaskStatus={this.updateTaskStatus} 
        />
        <TaskSummaryPage tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
