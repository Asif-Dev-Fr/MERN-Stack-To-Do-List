import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar';
import TodoList from './Components/TodoList';
import EditTodo from './Components/EditTodo';
import CreateTodo from './Components/CreateTodo';

function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/edit/:id" component={EditTodo} />
      </Switch>
    </div>
  );
}

export default App;
