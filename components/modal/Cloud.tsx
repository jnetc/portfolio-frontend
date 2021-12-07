import { FC } from 'react';

export const Cloud: FC<{ cloudSize: 's' | 'm' | 'l' }> = ({ cloudSize }) => {
  return (
    <div className={`modal__cloud ${cloudSize}`}>
      <svg viewBox="0 0 99 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className="cloud-back"
          d="M33.5379 26.354C33.2962 25.0634 33.1699 23.7322 33.1699 22.3715C33.1699 10.4941 42.7984 0.865631 54.6757 0.865631C64.1788 0.865631 72.2422 7.0294 75.0863 15.5771C77.4748 14.0464 80.315 13.1588 83.3625 13.1588C91.8452 13.1588 98.7218 20.0354 98.7218 28.5181C98.7218 37.0008 91.8452 43.8774 83.3625 43.8774H75.1207V43.8619H6.38815C6.13491 42.6857 6.00158 41.4649 6.00158 40.2129C6.00158 30.6832 13.7269 22.9579 23.2566 22.9579C27.1089 22.9579 30.6664 24.2203 33.5379 26.354Z"
        />
        <path
          className="cloud-front"
          d="M23.448 29.0715C23.2439 27.9811 23.1371 26.8564 23.1371 25.7068C23.1371 15.6715 31.2723 7.53621 41.3077 7.53621C49.3369 7.53621 56.1499 12.7441 58.5528 19.9662C60.5709 18.6728 62.9707 17.9229 65.5456 17.9229C72.7127 17.9229 78.5228 23.733 78.5228 30.9001C78.5228 38.0673 72.7127 43.8774 65.5456 43.8774L58.5819 43.8774V43.8643H0.508987C0.295029 42.8705 0.182381 41.839 0.182381 40.7812C0.182381 32.7295 6.70963 26.2022 14.7614 26.2022C18.0162 26.2022 21.0219 27.2688 23.448 29.0715Z"
        />
      </svg>
    </div>
  );
};
