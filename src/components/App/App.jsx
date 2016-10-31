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
        <div className='wipe bc-eletric-aqua vh-100 w-two-thirds p-abs top-0 zi-neg100' />
        <div className='content-wipe bc-swamp-black vh-100 w-two-thirds p-abs top-0 zi-neg100' />
        <div className='show-content w-two-thirds pad-lt-10pct of-hidden mar-tp-24vh'>
          <h1 className='mar-0 mar-bt-2rem fs-1p5rem uppercase'>Hello There,<br />I'm David McKoy.</h1>
          <p className='mar-0 mar-bt-2rem ln_hgt-1p5'>I’m a Designer / Frontend Developer at DOZR. I’ve previously<br />worked with some awesome people at reebee and bitHound.</p>
          <button className='
            mar-bt-2rem
            pad_0875-rem-tp
            pad_1p5-rem-lt
            pad_0875-rem-bt
            pad_1p5-rem-rt
            fs-0875rem
            uppercase
            txt-white
            bc-eletric-aqua
            pointer
            bor-none
          '>Say Hello</button>
          <nav>
            <a className='uppercase no-txt-decoration txt-white fs-0875rem' href=''>Twitter</a>
            <a className='uppercase no-txt-decoration txt-white fs-0875rem pad_1-rem-lt' href=''>Dribbble</a>
            <a className='uppercase no-txt-decoration txt-white fs-0875rem pad_1-rem-lt' href=''>GitHub</a>
          </nav>
        </div>
      </div>
    );
  }
});

export default App;
