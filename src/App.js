import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import H1 from './components/H1'
import Checkbox from './components/Checkbox';
import Button from './components/Button';
import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div className="App">                
        <H1 text="Hello Devarsh via props"/><Clock time="I am props." />
        <H1 text="Hello User2 using same component" />

        <Checkbox hobby="cricket"/>

        <Button value="Submit" />
      </div>
    );   
  }
}

export default App;
