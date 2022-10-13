import React from 'react';
import { Tasks } from './Tasks';
import { TasksCollection } from '/imports/api/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';
import { TaskForm } from './TaskForm';

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  
  return (
    <div>
      <h1>Todo List</h1>
      <TaskForm/>
      <Tasks tasks={tasks}/>
    </div>
  )
}

