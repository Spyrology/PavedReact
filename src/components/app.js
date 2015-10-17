import React from 'react';
import Home from './home/home';

class App extends React.Component {
  render() {
    return (
      <div className="container">
      	<p>Hello!</p>
      	<Home />
      </div>
    );
  }
}

export default App;