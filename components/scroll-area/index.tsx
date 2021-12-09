import { FC, useState, useRef, useEffect, MouseEvent } from 'react';
// Hook
import { useResize } from '@Hooks/useResize';

export const ScrollArea: FC = ({ children }) => {
  const { resize } = useResize();
  const ref = useRef<HTMLDivElement>(null);
  const [leftBtn, setLeftBtn] = useState(false);
  const [rightBtn, setRightBtn] = useState(true);
  const [scrollOpt, setScrollOpt] = useState({
    step: 0,
    position: 0,
    scrollEnd: 0,
  });

  useEffect(() => {
    const scroll = ref.current;
    if (!scroll) return;

    const getStyle = window.getComputedStyle(scroll);
    const gap = parseInt(getStyle.getPropertyValue('gap'));

    const scrollWidth = scroll.scrollWidth;
    const scrollPosition = scroll.scrollLeft;
    const scrollVisibleArea = scroll.offsetWidth;
    const scrollEndPosition = scrollWidth - scrollVisibleArea;

    setScrollOpt({
      step: scrollVisibleArea + gap,
      position: scrollPosition,
      scrollEnd: scrollEndPosition,
    });
  }, [resize]);

  // useEffect(() => {
  //   const resize = () => {
  //     const getWidth =
  //       window.innerWidth ||
  //       document.documentElement.clientWidth ||
  //       document.body.clientWidth;
  //     setResize(getWidth);
  //   };
  //   window.addEventListener('resize', resize);

  //   return () => {
  //     window.removeEventListener('resize', resize);
  //   };
  // }, []);

  const scroll = (ev: MouseEvent<HTMLDivElement>) => {
    const areaPosition = ev.currentTarget.scrollLeft;

    if (areaPosition > 0) setLeftBtn(true);
    if (areaPosition <= 0) setLeftBtn(false);
    if (areaPosition >= scrollOpt.scrollEnd) setRightBtn(false);
    if (areaPosition < scrollOpt.scrollEnd) setRightBtn(true);

    scrollOpt.position = areaPosition;
    setScrollOpt({ ...scrollOpt });
  };

  const toLeft = () => {
    scrollOpt.position -= scrollOpt.step;

    ref.current?.scrollTo({
      left: scrollOpt.position,
      behavior: 'smooth',
    });

    setScrollOpt({ ...scrollOpt });
  };

  const toRight = () => {
    scrollOpt.position += scrollOpt.step;

    ref.current?.scrollTo({
      left: scrollOpt.position,
      behavior: 'smooth',
    });

    setScrollOpt({ ...scrollOpt });
  };

  return (
    <section className="card-scrollarea">
      <span
        className={
          leftBtn ? 'card-scroll-button to-left' : 'card-scroll-button'
        }
        role="button"
        tabIndex={0}
        title="scroll to left"
        onClick={toLeft}
      />

      <div className="card-wrapper" ref={ref} onScroll={scroll}>
        {children}
      </div>

      <span
        className={
          rightBtn ? 'card-scroll-button to-right' : 'card-scroll-button'
        }
        role="button"
        tabIndex={0}
        title="scroll to right"
        onClick={toRight}
      />
    </section>
  );
};
