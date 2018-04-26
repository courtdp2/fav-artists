import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Artist from './components/Artist/Artist';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/artists/:artistid" component={Artist} />
        </div>
      </Router>
    );
  }
}

export default App;
