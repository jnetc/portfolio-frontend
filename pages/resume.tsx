import type { ResumeDataFromSanity } from '@Types';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// Hooks
import { Language } from '@Hooks/useContextLanguage';
// Sanity CMS
import { groq } from 'next-sanity';
import { client } from '@Sanity/sanity.client';
// Components
import { Profile } from '@Resume/profile/Profile';
import { Notice } from '@Resume/notice/Notice';
import { Section } from '@Resume/section/Section';
import { Logo } from '@Navigation/logo/Logo';
import { SwitchLang } from '@Navigation/switch-lang/SwitchLang';
import { SwitchTheme } from '@Navigation/switch-theme/SwitchTheme';
// Dynamic components
const GoToTopButton = dynamic(() => import('@GoToTopButton'));
// Helpers
import { transformLocalizationResume } from '@Helpers/functions';
import { criticalCSS } from '@Helpers/critical';
// Localization
import { backLink } from '@Helpers/localization';

const App: NextPage = ({ main, locale }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const currentLangData = transformLocalizationResume(locale, main);
  const locales = locale as 'en' | 'ru';

  return (
    <Language.Provider value={{ lang: locale }}>
      <>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
          <meta name="googlebot" content="noindex, nofollow, noimageindex" />
          <meta name="robots" content="noindex, nofollow, noimageindex" />
          <meta
            name="description"
            content="I am interested in a job where I can improve my skills and work remotely with a team. If you think, that i can be of use to you team, I will be happy to meet you for an interview and get to know the job."
          />
          <title>Resume</title>
        </Head>
        <main className="resume">
          <header className="header resume__header" aria-label="navigation panel">
            <Logo />

            <Link href={locales === 'en' ? '/' : `/${locales}`} className="resume__back-link back-link">
              {backLink[locales]}
            </Link>

            <SwitchLang path="resume" />
            <SwitchTheme />
          </header>

          <Profile data={currentLangData.resume_profile} />
          {currentLangData.resume_notice.active && <Notice data={currentLangData.resume_notice} />}

          <div className={`resume__activity-block ${currentLangData.resume_notice.active && 'activity-block-without-notice'}`}>
            <Section name="experience" data={currentLangData.resume_experience} />
            <Section name="education" data={currentLangData.resume_education} />
          </div>
          <Section name="skills" data={currentLangData.resume_skills} />
          <Section name="languages" data={currentLangData.resume_languages} />
          <Section name="interests" data={currentLangData.resume_interests} />
        </main>
        <GoToTopButton />
      </>
    </Language.Provider>
  );
};

export default App;

export const getStaticProps: GetStaticProps = async ({ preview = false, locale }) => {
  if (preview) return { props: { preview } };

  const queryResume = groq`*[_type in [
    'resume_profile',
    'resume_notice',
    'resume_education',
    'resume_experience',
    'resume_skills',
    'resume_languages',
    'resume_interests'
    ]] `;

  const main = await client.fetch<Array<ResumeDataFromSanity>>(queryResume);

  return {
    props: {
      preview,
      main,
      locale,
    },
  };
};
