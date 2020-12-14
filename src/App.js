import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import './index.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
