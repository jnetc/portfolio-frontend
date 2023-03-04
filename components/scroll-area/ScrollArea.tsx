import { FC, useState, useRef, useEffect, MouseEvent, ReactNode } from 'react';
// Hook
import { useResize } from '@Hooks/useResize';
// Component
import { ScrollButton } from './ScrollButton';
// Style
import style from './scroll-area.module.css';

export const ScrollArea: FC<{ children: ReactNode }> = ({ children }) => {
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
    const gap = parseInt(getStyle.getPropertyValue('grid-column-gap'));
    const padLeft = parseInt(getStyle.getPropertyValue('padding-left'));
    const padRight = parseInt(getStyle.getPropertyValue('padding-right'));

    const scrollWidth = scroll.scrollWidth;
    const scrollPosition = scroll.scrollLeft;
    const scrollVisibleArea = scroll.offsetWidth;
    const scrollEndPosition = scrollWidth - scrollVisibleArea;

    // Show / Hide right button area is overflowed
    if (scrollWidth > scrollVisibleArea) {
      setRightBtn(true);
    } else {
      setRightBtn(false);
    }

    setScrollOpt({
      step: scrollVisibleArea + gap - padLeft - padRight,
      position: scrollPosition,
      scrollEnd: scrollEndPosition,
    });
  }, [resize]);

  const scroll = (ev: MouseEvent<HTMLDivElement>) => {
    const areaPosition = ev.currentTarget.scrollLeft;

    if (areaPosition > 0) setLeftBtn(true);
    if (areaPosition <= 0) setLeftBtn(false);
    if (areaPosition >= scrollOpt.scrollEnd) setRightBtn(false);
    if (areaPosition < scrollOpt.scrollEnd) setRightBtn(true);

    scrollOpt.position = areaPosition;
    setScrollOpt({ ...scrollOpt });
  };

  const moveTo = (direction: string) => {
    if (direction === `${style.to_left}`) {
      scrollOpt.position -= scrollOpt.step;
    }
    if (direction === `${style.to_right}`) {
      scrollOpt.position += scrollOpt.step;
    }

    ref.current?.scrollTo({
      left: scrollOpt.position,
      behavior: 'smooth',
    });

    setScrollOpt({ ...scrollOpt });
  };

  return (
    <section className={`${style.module} grid-12`}>
      <ScrollButton visible={leftBtn} move={style.to_left} handler={moveTo} />
      <div className={style.wrapper} ref={ref} onScroll={scroll}>
        {children}
      </div>
      <ScrollButton visible={rightBtn} move={style.to_right} handler={moveTo} />
    </section>
  );
};
