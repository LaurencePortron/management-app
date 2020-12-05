import React from 'react';
import WishList from '../Wishlist/WishList';
import './Welcome.css';
import Taskdashboard from '../Taskmanager/TaskDashboard';
import ProgressChart from '../Progress/ProgressChart';

export default function Welcome(props) {
  return (
    <div className='welcome-container'>
      <h1>Your current progress</h1>
      <ProgressChart />
      <h1>Your current tasks</h1>
      <Taskdashboard />
      <h1>Your wishlist</h1>
      <WishList />
    </div>
  );
}
