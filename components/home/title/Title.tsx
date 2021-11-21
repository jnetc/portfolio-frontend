import { FC } from 'react';
import Link from 'next/link';

import { Bulb } from '../bulb-icon/Bulb';

export const Title: FC = () => {
  return (
    <header
      className="home-left-side"
      aria-label="home page title and quick links"
    >
      <div className="svg-title">
        <svg viewBox="0 0 625 220">
          <text className="svg-title__text ampersand" x="-5" y="210">
            &
          </text>
          <text className="svg-title__text ampersand-stroke" x="12" y="210">
            &
          </text>
          <Bulb />
          <text className="svg-title__text text-idea" x="140" y="125">
            your ideas
          </text>
          <text className="svg-title__text text-skill" x="175" y="212">
            my skills
          </text>
        </svg>
      </div>
      <h1 className="home-left-side__title">your ideas and my skills</h1>
      <p className="home-left-side__desc">
        Hi! I am Anton and i create simple, clear and modern web things in the
        digital world! Currently, I am focused to find position as a UI designer
        / developer.
      </p>
      <div className="home-btns">
        <button
          className="home-btns__button"
          title="Hire me"
          aria-label="contact me by email"
        >
          Hire me
        </button>
        <Link href="#portfolio">
          <a className="home-btns__link" role="button">
            My works
            <span className="link-arrow-icon" />
          </a>
        </Link>
      </div>
    </header>
  );
};
