import { FC } from 'react';

export const RecentProject: FC = () => {
  return (
    <article className="left">
      <span>recent project</span>
      <h1>Wilmaaz</h1>
      <p>
        My first pet project. Dashboard for creating a schedule of lessons,
        hobbies or any other activities for the whole week. It&apos;s works
        locally and does not require registration or other remote actions.The
        goal, to get experience with next.js, typescript, styled-components and
        indexedDB.
      </p>
      <ul>
        <li>Next.js</li>
        <li>Styled-Components</li>
        <li>Typescript</li>
        <li>Vercel</li>
        <li>IndexedDB</li>
      </ul>
      <a href="http://" className="github-btn" role="button">
        github
      </a>
      <a href="http://" className="webpage-btn" role="button">
        website
      </a>
      <div className="project-image"></div>
    </article>
  );
};
