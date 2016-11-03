import React from 'react';
import './App.css';

const App = React.createClass({
  render () {
    return (
      <div className='txt-white fs-1rem'>
        <div className='image vh-100 w-two-thirds p-abs top-0 zi-neg100' />
        <div className='wipe bc-eletric-aqua vh-100 w-two-thirds p-abs top-0 zi-neg100' />
        <div className='content-wipe fullscreen bc-grey-90 vh-100 w-two-thirds p-abs top-0 zi-neg100' />
        <div className='show-content fullscreen w-two-thirds pad-lt-10pct of-hidden pad_2p5-rem-rt mar-tp-24vh'>
          <h1 className='mar-0 mar-bt-2rem fs-1p5rem uppercase'>Hello There,<br />I'm David McKoy.</h1>
          <p className='mar-0 mar-bt-2rem ln_hgt-1p5 measure-30'>I’m a Designer / Frontend Developer at DOZR. I’ve previously worked with some awesome people at reebee and bitHound.</p>
          <a href='mailto:dmckoy85@gmail.com' className='
            btn-anime
            mar-bt-2rem
          '>
            <button className='
              pad_0875-rem-tp
              pad_1p5-rem-lt
              pad_0875-rem-bt
              pad_1p5-rem-rt
              fs-0875rem
              uppercase
              txt-white
              bc-eletric-aqua
              bor-none
              pointer
            '>Say Hello</button>
          </a>
          <nav>
            <a className='uppercase no-txt-decoration x-link txt-white fs-0875rem' href='https://twitter.com/dmck0y'>Twitter</a>
            <a className='uppercase no-txt-decoration x-link txt-white fs-0875rem mar_1p5-rem-lt' href='https://dribbble.com/dmck0y'>Dribbble</a>
            <a className='uppercase no-txt-decoration x-link txt-white fs-0875rem mar_1p5-rem-lt' href='https://github.com/dmck0y'>GitHub</a>
          </nav>
        </div>
      </div>
    );
  }
});

export default App;
