import React from 'react';
import Menu from './menu/menu';

class App extends React.Component {
  render() {
    return (
      <div className="container">
      	<p>Hello!</p>
      	<Menu />
      </div>
    );
  }
}

export default App;