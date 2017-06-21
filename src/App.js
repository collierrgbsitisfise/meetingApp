import React, { Component } from 'react';
import { Link } from 'react-router';
import NavigationBar from './components/Navigation/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="container">
          <NavigationBar />
          {this.props.children}
      </div>
    );
  }
}

export default App;