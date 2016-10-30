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
      <div className='txt-white fs-1rem'>
        <div className='bc-swamp-black vh-100 w-two-thirds o-hidden content' />
        <div className='bc-swamp-black-tint
                        vh-100
                        w-two-thirds
                        bg-content
                        p-abs
                        top-0
                        zi-neg100'
        />
      </div>
    );
  }
});

export default App;
