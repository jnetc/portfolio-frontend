// Types
import { ScrollButtonType } from '@Types';
// Style
import style from './scroll-area.module.css';

export const ScrollButton = ({ visible, move, handler }: ScrollButtonType) => {
  const pressBntArrow = () => handler(move);

  return (
    <span
      className={visible ? `${style.button} ${move}` : `${style.button}`}
      role="button"
      tabIndex={0}
      title={`move to ${move}`}
      onClick={pressBntArrow}
    />
  );
};
