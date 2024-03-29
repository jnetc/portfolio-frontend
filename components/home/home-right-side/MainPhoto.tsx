import Image from 'next/image';
// Hook
import { useContextMain } from '@Hooks/useContextMain';

export const MainPhoto = () => {
  const { theme } = useContextMain();
  return (
    <div className={theme === 'light' ? `pic-l` : `pic-d`} aria-hidden>
      <Image
        priority
        src="/images/picture_light.webp"
        alt="Devan"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        aria-hidden
      />
    </div>
  );
};
