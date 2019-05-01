import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './component/NavBar';
import ExpenseGraph from './component/ExpenseGraph';
import './App.css';


const BaseLayout = () => (
  <div className="base">
    <NavBar />
    <Switch>
      <Route path="/" component={ExpenseGraph} />
    </Switch>
  </div>
)

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
    );
  }
}

export default App;
