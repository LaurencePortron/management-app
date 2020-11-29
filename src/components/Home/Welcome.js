import React from 'react';
import WishList from '../Wishlist/WishList';
import TaskDashboard from '../Taskmanager/TaskDashboard';
import './Welcome.css';

export default function Welcome(props) {
  return (
    <div className='welcome-container'>
      <TaskDashboard />
      <WishList />
    </div>
  );
}
