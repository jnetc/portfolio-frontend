import { FC } from 'react';
// Hook
import { useStore } from '@Store';
// Helper
import { animationOptimization } from '@Helpers/functions';
// Type
import { HomeLeftBtnType } from '@Types';
// Localization
import { homeLeftButton } from '@Languages';

export const HomeLeftButton: FC<HomeLeftBtnType> = ({
  style,
  open,
  accessibility,
}) => {
  const { lang, toggleModal } = useStore();

  const openModal = (name: string) => {
    return () => {
      animationOptimization(1000);
      toggleModal({ show: true, name });
    };
  };
  return (
    <button
      className={`home-${open}-btn`}
      title={homeLeftButton[style][lang]}
      aria-label={accessibility}
      onClick={openModal(open)}
    >
      {homeLeftButton[style][lang]}
      {style === 'secondary' && <span className="link-arrow-icon" />}
    </button>
  );
};
