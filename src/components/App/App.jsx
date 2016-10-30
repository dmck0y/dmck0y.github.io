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
        <div className='wipe bc-swamp-black-tint vh-100 w-two-thirds p-abs top-0 zi-neg100' />
        <div className='content-wipe bc-swamp-black vh-100 w-two-thirds p-abs top-0 zi-neg100' />
        <div className='show-content w-two-thirds pad-lt-10pct of-hidden mar-tp-25vh'>
          <h1>Hello There.</h1>
          <h1>I'm David McKoy.</h1>
          <p>I’m a Designer / Frontend Developer at DOZR. I’ve previously</p>
          <p>worked with some awesome people at reebee and bitHound.</p>
          <button>Say Hello</button>
          <nav>
            <a href=''>Twitter</a>
            <a href=''>Dribbble</a>
            <a href=''>GitHub</a>
          </nav>
        </div>
      </div>
    );
  }
});

export default App;
