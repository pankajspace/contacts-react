import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Contacts from './container/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Contacts />
      </div>
    );
  }
}

export default App;
