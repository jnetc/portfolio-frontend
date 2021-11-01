import { FC } from 'react';
import Link from 'next/link';
import { useStore } from '@Hooks/useStore';
export const SwitchLang: FC = () => {
  const { setLang } = useStore();
  // const [lang, setLang] = useState('');

  const toggleLang = (value: string) => {
    setLang(value);
  };

  return (
    <>
      <Link href="/" locale="en">
        <a onClick={() => toggleLang('en')}>EN</a>
      </Link>
      <Link href="/ru" locale="ru">
        <a onClick={() => toggleLang('ru')}>RU</a>
      </Link>
    </>
  );
};
