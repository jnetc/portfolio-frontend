import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Sanity CMS
import { groq } from 'next-sanity';
import { getClient } from '@Sanity/sanity.server';
// Components
import { Profile } from '@Resume/profile/Profile';
import { Notice } from '@Resume/notice/Notice';
import { Section } from '@Resume/section/Section';
import { Logo } from '@Navigation/logo/Logo';
import { SwitchLang } from '@Navigation/switch-lang/SwitchLang';
import { SwitchTheme } from '@Navigation/switch-theme/SwitchTheme';
// Dynamic components
const GoToTopButton = dynamic(() => import('@GoToTopButton'));
// Types
import { ResumeDataFromSanity } from '@Types';
// Helpers
import { transformLocalizationResume } from '@Helpers/functions';
import { criticalCSS } from '@Helpers/critical';
// Hook
import { Language } from '@Hooks/useContextLanguage';

const App: NextPage = ({
  main,
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const currentLangData = transformLocalizationResume(locale, main);

  // console.log(currentLangData);

  return (
    <Language.Provider value={{ lang: locale }}>
      <>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
          <meta name="googlebot" content="noindex, nofollow, noimageindex" />
          <meta name="robots" content="noindex, nofollow, noimageindex" />
          <meta
            name="description"
            content="I am interested in a job where I can improve my skills and work remotly with a team. If you think, that i can be of use to you team, I will be happy to meet you for an interview and get to know the job."
          />
          <title>Resume</title>
        </Head>
        <main className="resume">
          <header
            className="header resume__header"
            aria-label="navigation panel"
          >
            <Logo />
            <SwitchLang path="resume" posCss="resume__pos-lang" />
            <SwitchTheme />
          </header>

          <Profile data={currentLangData.resume_profile} />
          <Notice data={currentLangData.resume_notice} />
          <div className="resume__activity-block">
            <Section
              name="experience"
              data={currentLangData.resume_experience}
            />
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

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  locale,
}) => {
  // Альтернативный вариант
  // navigation {${locale}}
  const queryMain = groq`*[_type in [
    'resume_profile',
    'resume_notice',
    'resume_education',
    'resume_experience',
    'resume_skills',
    'resume_languages',
    'resume_interests'
    ]] `;

  const main = await getClient(preview).fetch<Array<ResumeDataFromSanity>>(
    queryMain
  );

  return {
    props: {
      main,
      locale,
    },
  };
};

// const summary = {
//   _id: 'asdafw3gda45',
//   sub_title: 'UI Designer / Developer',
//   summary:
//     'I am a ui developer / designer with over one year of professional experience and over five years as a freelancer. I am currently looking for new and interesting positions in the IT industry. I have a good knowledge of graphics programs and can also write code. Web development is my most important and meaningful hobby and I spend a lot of time following and learning about the latest trends and technologies in the industry. I like to solve the problems, so i have an account on stackoverflow and solve problems others developers from time to time. I also strive to develop are modern and simple solutions for the client. On the main page you can see references of projects what I has done.',
//   github_href: 'https://www.github.com',
//   stackoverflow_href: 'https://www.github.com',
//   email: 'adadad@gmail.com',
// };

// const experience = [
//   {
//     id: 'asdadada',
//     title: 'Wizense Oy',
//     date: 'April - August 2019 | Vantaa',
//     description:
//       'Internship as a full stack developer. I worked from scratch on the the admin panel UI. In my responsibility was create visual design, mockup and and development with react.js. Also connecting and working in the Firebase.',
//     tags: [
//       'React.js',
//       'Redux',
//       'SCSS',
//       'Firebase',
//       'Adobe XD',
//       'Adobe Illustrator',
//     ],
//     link: 'https://github.com/jnetc/dashboard',
//   },
//   {
//     id: 'asdadant',
//     title: 'YummyBeauty',
//     date: 'June - July 2017 | Helsinki',
//     description:
//       'This was a small project for self employed. The design should be, that emphasize that this is a beauty salon . It was necessary to create web page and hosted it as fast as possible.',
//     tags: ['HTML5', 'CSS3', 'JQuery', 'Photoshop'],
//     link: 'www.yummybeauty.fi',
//   },
//   {
//     id: 'asdada45',
//     title: 'Vitercom Oy',
//     date: 'May - July 2016 | Helsinki',
//     description:
//       'Internship as a web developer, Kotisivujen suunnittelu ja ylläpito, mainostus, kehittäminen',
//     tags: ['HTML5', 'CSS3', 'JQuery', 'Photoshop'],
//     link: 'www.iltrio.fi',
//   },
// ];
// const education = [
//   {
//     id: 'asdadant2',
//     title: 'Opifame - Fullstack-Devaaja',
//     date: 'March - September 2019 | Espoo',
//     description: 'Kotisivujen suunnittelu ja ylläpito, mainostus, kehittäminen',
//     link: 'www.opiframe.fi',
//   },
//   {
//     id: 'asdsdfsr',
//     title: 'Amiedu',
//     date: 'December - March 2019 | Helsinki',
//     description: 'Kotisivujen suunnittelu ja ylläpito, mainostus, kehittäminen',
//     link: 'www.amiedu.fi',
//   },
//   {
//     id: 'asfserf54',
//     title: 'Kouvolan liiketalousinstituutti',
//     date: '2000 - 2003 | Kouvola',
//     description: 'Merkonomin perustutkinto (markkinointi)',
//   },
//   {
//     id: 'as4s5df4e',
//     title: 'Meri-Porin yläaste',
//     date: '1998 - 1999',
//     description: '9-luokka (lukuvuositodistus)',
//   },
// ];
// const skills = [
//   {
//     id: 'as5s4f7ggr',
//     title: 'Programming Languages',
//     description:
//       'HTML5, JSX, CSS3/SASS, JavaScript, TypeScript, Python, GraphQL, GROQ',
//   },
//   {
//     id: 'f2e5w4sfsdqw',
//     title: 'Libraries & Frameworks',
//     description: 'React, Next, Gatsby, Node.js, Vue, Express.js, JQuery',
//   },
//   {
//     id: 'f5se4rf5e',
//     title: 'Platforms',
//     description:
//       'GitHub, Netlify, Vercel, Contentful, Sanity.io, DatoCMS, FireBase, MongoDB',
//   },
//   {
//     id: 'a1da4d5w4ew87e',
//     title: 'Tools',
//     description:
//       'Adobe XD, Adobe Illusrator, Adobe Photoshop, Figma, Adobe Flash, Cinema 4D, Adobe Dreamweaver, Microsoft Office',
//   },
// ];
// const languages = [
//   {
//     id: 'da54ff7ggr',
//     title: 'English',
//     description: 'Limited working proficiency',
//   },
//   {
//     id: '45e5e4sfsdqw',
//     title: 'Finish',
//     description: 'Limited working proficiency',
//   },
//   {
//     id: 'k76e4rfd5e',
//     title: 'Russian',
//     description: 'native or bilingual proficiency',
//   },
// ];
// const interests = [
//   {
//     id: 'a1da4l4b4ew87e',
//     description:
//       'Disign trends, History, Philosophy, Cooking, Anime, Movies, Walk in the woods',
//   },
// ];
