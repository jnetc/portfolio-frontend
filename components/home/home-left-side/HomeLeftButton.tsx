import { FC } from 'react';
// Hook
import { useContextStore } from '@Hooks/useContextStore';
import { useContextMain } from '@Hooks/useContextMain';
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
  const { lang } = useContextStore();
  const { toggleModal } = useContextMain();

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
      data-modal="open-modal"
      aria-label={accessibility}
      onClick={openModal(open)}
    >
      {homeLeftButton[style][lang]}
      {style === 'secondary' && <span className="link-arrow-icon" />}
    </button>
  );
};
