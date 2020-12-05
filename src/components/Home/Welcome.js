import React from 'react';
import WishList from '../Wishlist/WishList';
import './Welcome.css';
import Taskdashboard from '../Taskmanager/TaskDashboard';

export default function Welcome(props) {
  return (
    <div className='welcome-container'>
      <Taskdashboard />
      <WishList />
    </div>
  );
}
