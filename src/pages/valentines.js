import Layout from '../components/Layout';
import React, { useState } from 'react';
import { Link } from 'gatsby';

import '../components/valentines.css';
let lol = true;
const Valentines = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleIsClicked = () => {
    setIsClicked(!isClicked);
  };
  return (
    <Layout>
      <div
        id={isClicked ? 'envelope opened' : 'envelope'}
        onClick={handleIsClicked}
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="bgoverlay">
          <div className={isClicked ? 'container open' : 'container'}>
            <span class="ico">
              <span class="ico2"></span>
              <span class="title">Touch Me</span>
            </span>
            <div class="endtext">
              <span class="close" title="Restart">
                <i class="fa fa-times"></i>
              </span>
              <h1>Be my valentine?</h1>
              <div className="btns">
                <div className="yays" style={{ fontSize: '50px' }}>
                  <Link to="valentines_countdown">yays</Link>
                </div>
                <div className="nays" style={{ fontSize: '50px' }}>
                  <Link to="valentines_countdown">nays</Link>
                </div>
              </div>
              <h3>~bbyface</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Valentines;
