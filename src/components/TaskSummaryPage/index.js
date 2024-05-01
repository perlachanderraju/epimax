import React from 'react';
import Bargraph from '../Bargraph';
import './index.css'
const TaskSummaryPage = ({ tasks }) => {
  // Calculate task metrics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'Completed').length;
  const pendingTasks = totalTasks - completedTasks;
  const total=[{
    name:"summary",
    ct:completedTasks,
    pt:pendingTasks
  }]
  return (
    <div className='sumdiv'>
        <div className='sumdiv2'>
            <h2>Task Summary</h2>
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
            <p>Pending Tasks: {pendingTasks}</p>

        </div>
        <Bargraph total={total}/>    
    </div>
  );
}

export default TaskSummaryPage;
