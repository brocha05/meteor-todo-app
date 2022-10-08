import React from 'react';
import { Tasks } from './Tasks';

const tasks = [
  {_id: 1, text: 'First Task'},
  {_id: 2, text: 'Second Task'},
  {_id: 3, text: 'Third Task'},
];

export const App = () => (
  <div>
    <h1>Hello world from Meteor!</h1>
    <Tasks tasks={tasks}/>
  </div>
);
