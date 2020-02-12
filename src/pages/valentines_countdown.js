import Layout from '../components/Layout';
import React, { useRef } from 'react';
import { gsap, TimelineMax } from 'gsap';

const ValentinesCountDown = () => (
  <Layout>
    <div>COUNT DOWN</div>
    <svg id="canvas">
      <defs>
        <g id="heart">
          <g>
            <g>
              <path
                class="o_heart"
                d="M102.7,12.4L102.7,12.4C90.5,0.2,71.3-1,57.7,8.8c-13.6-9.9-32.9-8.7-45.2,3.5l0,0
                                   c-13.6,13.6-13.6,35.8,0,49.3L48.8,98c1.8,1.8,4,2.9,6.3,3.3c3.9,0.9,8.2-0.1,11.2-3.2l36.3-36.3C116.2,48.2,116.2,26,102.7,12.4
                                   z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                class="i_heart"
                d="M74.7,34L74.7,34c-4.6-4.6-11.9-5.1-17.1-1.4c-5.2-3.8-12.5-3.3-17.1,1.3c-5.1,5.1-5.1,13.6,0,18.7
                                   l13.8,13.8c0.7,0.7,1.5,1.1,2.4,1.3c1.5,0.3,3.1-0.1,4.2-1.2l13.8-13.8C79.9,47.6,79.9,39.2,74.7,34z"
              />
            </g>
          </g>
        </g>
      </defs>
    </svg>
  </Layout>
);

export default ValentinesCountDown;
