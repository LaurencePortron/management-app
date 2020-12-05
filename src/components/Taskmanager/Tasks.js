import React from 'react';
import Taskdashboard from './TaskDashboard';
import Filter from './Filter';

export default function Tasks(props) {
  return (
    <>
      <Filter />
      <Taskdashboard />
    </>
  );
}
