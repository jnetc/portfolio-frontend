// Context
import { useContextLanguage } from '@Hooks/useContextLanguage';
import { useContextMain } from '@Hooks/useContextMain';
// Helper
import { animationOptimization } from '@Helpers/functions';
// Localization
import { homeLeftButton } from '@Helpers/localization';

export const HomeLeftButton = ({
  name,
  accessibility,
}: {
  name: 'contact';
  accessibility: string;
}) => {
  const { lang } = useContextLanguage();
  const { toggleModal } = useContextMain();

  const openModal = (name: string) => {
    return () => {
      animationOptimization(1000);
      toggleModal({ show: true, name });
    };
  };
  return (
    <button
      className={`home-${name}-btn`}
      title={homeLeftButton[name][lang]}
      data-modal="open-modal"
      aria-label={accessibility}
      onClick={openModal(name)}
    >
      {homeLeftButton[name][lang]}
    </button>
  );
};
