import { FC } from 'react';

export interface ScrollButtonType {
  visible: boolean;
  move: string;
  handler: (direction: string) => void;
}

export const ScrollButton: FC<ScrollButtonType> = ({
  visible,
  move,
  handler,
}) => {
  const pressBntArrow = () => handler(move);

  return (
    <span
      className={
        visible ? `card-scroll-button to-${move}` : 'card-scroll-button'
      }
      role="button"
      tabIndex={0}
      title={`move to ${move}`}
      onClick={pressBntArrow}
    />
  );
};
