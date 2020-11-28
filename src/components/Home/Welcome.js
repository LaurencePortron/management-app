import React from 'react';
import WishList from '../Wishlist/WishList';
import TaskDashboard from '../Taskmanager/TaskDashboard';

export default function Welcome(props) {
  return (
    <div>
      <TaskDashboard />
      <WishList />
    </div>
  );
}
