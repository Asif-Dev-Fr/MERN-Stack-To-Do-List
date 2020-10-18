import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Todolist} />
        <Route path="/create" component={CreatTodo} />
        <Route path="/edit/:id" component={EditToDo} />
      </Switch>
    </div>
  );
}

export default App;
