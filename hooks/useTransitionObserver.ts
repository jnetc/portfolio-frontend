import { useEffect } from 'react';

export const useTransitionObserver = (cssClass: string) => {
  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = function (entries: IntersectionObserverEntry[]) {
      entries.forEach(el => {
        // if element out of the top view
        if (el.isIntersecting) {
          el.target.querySelector('video')?.play();
        } else {
          // if element is visible
          el.target.querySelector('video')?.pause();
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    document.querySelectorAll(`.${cssClass}`).forEach(el => observer.observe(el));
  }, [cssClass]);
};
