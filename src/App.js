import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Detail from './Components/DetailPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
