import React from 'react';
import './App.css';

const App = React.createClass({
  domLoaded () {
    document.addEventListener('DOMContentLoaded', (e) => {
      console.log(e);
    });
  },

  render () {
    this.domLoaded();
    return (
      <div>
      test
      </div>
    );
  }
});

export default App;
