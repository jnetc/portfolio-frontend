import { useContextLanguage } from '@Hooks/useContextLanguage';
// Localization
import { separators } from '@Helpers/localization';
// Style
import styles from './separator.module.css';

interface Props {
  name: 'portfolio' | 'about';
  margin?: boolean;
}

const Separator = ({ name, margin }: Props) => {
  const { lang } = useContextLanguage();

  return (
    <>
      <h2 className={`${margin ? `${styles.title10}` : `${styles.title}`} mob-right-pad`}>{separators[name].title[lang]}</h2>

      <span className={`${styles.desc} mob-right-pad`}>{separators[name].desc[lang]}</span>
    </>
  );
};

export default Separator;
