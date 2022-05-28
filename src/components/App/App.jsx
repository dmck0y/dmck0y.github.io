import React from 'react';
import './App.css';

const App = React.createClass({
  render () {
    return (
      <div className='fs-1rem'>
        <div className='image vh-100 w-two-thirds p-abs top-0 zi-neg100' />
        <div className='wipe bc-red vh-100 w-two-thirds p-abs top-0 zi-neg100' />
        <div className='content-wipe fullscreen bc-white-100 vh-100 w-two-thirds p-abs top-0 zi-neg100' />
        <div className='show-content flex flex-column vh-100 fullscreen w-two-thirds pad-lt-10pct of-hidden pad_2p5-rem-rt mar-tp-24vh'>
          <h1 className='mark relative mar-0 mar-bt-2rem fs-2p25rem uppercase flex-grow-1'>Hello There,<br />I'm David McKoy.<br />A Developer at Varicent.</h1>
          <nav className='flex-grow-1 fw9'>
            <a className='no-txt-decoration fs-0875rem' href='https://wastepaperbasket.art/'>WPB</a>
            <a className='no-txt-decoration fs-0875rem mar_1p5-rem-lt' href='https://github.com/dmck0y'>GitHub</a>
            <a className='no-txt-decoration fs-0875rem mar_1p5-rem-lt' href='https://twitter.com/dmck0y'>Twitter</a>
            <a className='no-txt-decoration fs-0875rem mar_1p5-rem-lt' href='https://www.instagram.com/__dcoy__/'>Instagram</a>
          </nav>
        </div>
      </div>
    );
  }
});

export default App;
