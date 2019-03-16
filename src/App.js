import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Contacts from './container/Contacts';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App container">
        <Contacts />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
