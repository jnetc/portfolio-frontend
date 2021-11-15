import { FC } from 'react';
import Link from 'next/link';

import { Bulb } from '../bulb-icon/Bulb';

const Title: FC = () => {
  return (
    <header id="main-title" aria-label="home page title and quick links">
      <div id="title">
        {/* <span id="and">&</span>
        <h1>
          <span id="bulb-wrap">
            <Bulb />
          </span>
          <strong>your ideas</strong>
          <strong>my skills</strong>
        </h1> */}
        <svg viewBox="0 0 625 220">
          <text id="ampersand" x="-5" y="210">
            &
          </text>
          <text id="ampersand-stroke" x="12" y="210">
            &
          </text>
          <Bulb />
          <text id="idea" x="140" y="125">
            your ideas
          </text>
          <text id="skill" x="175" y="212">
            my skills
          </text>
        </svg>
      </div>
      <h1>your ideas and my skills</h1>
      <p>
        Together, we will make your product in the digital world simple, clear
        and modern!
      </p>
      <div id="main-btns">
        <button title="Hire me" aria-label="contact me by email">
          Hire me
        </button>
        <Link href="#portfolio">
          <a role="button">
            My works
            <span id="works-btn-arrow" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Title;
