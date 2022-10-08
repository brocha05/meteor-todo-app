import React from 'react';
import { Tasks } from './Tasks';
import { TasksCollection } from '/imports/api/TasksCollection';
import { useTracker } from 'meteor/react-meteor-data';

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());
  
  return (
    <div>
      <h1>Hello world from Meteor!</h1>
      <Tasks tasks={tasks}/>
    </div>
  )
}

