import dynamic from 'next/dynamic';
// Dynamic components
const StackOverflow = dynamic(() => import('@Home/stack-overflow/StackOverflow'));
// Components
import { MainPhoto } from './MainPhoto';

export const HomeRightSide = () => {
  return (
    <div className="home-right-side">
      <StackOverflow />
      <MainPhoto />
      <svg viewBox="0 0 650 436" fill="none" className="home-right-side__rect rect-1" aria-hidden>
        <path d="M245.333 7.52434L633.328 196.22C641.634 200.259 646.093 209.46 644.119 218.482L601.087 415.074C598.89 425.115 589.44 431.855 579.231 430.663L23.3896 365.786C8.60272 364.061 0.817329 347.362 9.0018 334.926L219.88 14.5148C225.404 6.12167 236.297 3.12986 245.333 7.52434Z">
          <animate
            attributeName="d"
            attributeType="CSS"
            dur="150s"
            repeatCount="indefinite"
            values="M245.333 7.52434L633.328 196.22C641.634 200.259 646.093 209.46 644.119 218.482L601.087 415.074C598.89 425.115 589.44 431.855 579.231 430.663L23.3896 365.786C8.60272 364.061 0.817329 347.362 9.0018 334.926L219.88 14.5148C225.404 6.12167 236.297 3.12986 245.333 7.52434Z;

            M28.5048 5.62341L537.08 69.7258C544.514 70.6628 550.801 75.6763 553.368 82.7154L629.949 292.667C634.164 304.223 627.047 316.81 614.971 319.154L89.6581 421.129C78.5538 423.284 67.8731 415.81 66.0953 404.639L6.25227 28.6098C4.15749 15.447 15.281 3.95664 28.5048 5.62341Z;

            M20.5583 110.674L438.535 5.95181C445.793 4.13334 453.459 6.51835 458.404 12.1335L626.492 202.985C634.789 212.406 632.456 227.054 621.642 233.431L294.053 426.613C285.947 431.393 275.606 429.876 269.214 422.97L10.7399 143.658C0.417858 132.504 5.8166 114.367 20.5583 110.674Z;

        M245.333 7.52434L633.328 196.22C641.634 200.259 646.093 209.46 644.119 218.482L601.087 415.074C598.89 425.115 589.44 431.855 579.231 430.663L23.3896 365.786C8.60272 364.061 0.817329 347.362 9.0018 334.926L219.88 14.5148C225.404 6.12167 236.297 3.12986 245.333 7.52434Z"
          />
        </path>
      </svg>
      <svg viewBox="0 0 565 451" fill="none" className="home-right-side__rect rect-2" aria-hidden>
        <path>
          <animate
            attributeName="d"
            attributeType="CSS"
            dur="150s"
            repeatCount="indefinite"
            values="M148.165 5.45832L541.821 58.2812C555.123 60.0662 562.926 74.1872 557.359 86.3993L398.945 433.911C394.056 444.635 381.001 448.828 370.783 442.956L15.3716 238.733C5.60277 233.12 2.39622 220.55 8.28273 210.943L128.452 14.8312C132.588 8.08047 140.318 4.40537 148.165 5.45832Z;

            M317.484 6.38638L534.821 53.0725C549.659 56.26 555.68 74.1657 545.781 85.6706L245.545 434.625C237.302 444.205 222.349 443.833 214.593 433.854L9.67496 170.205C1.76222 160.024 5.40881 145.126 17.1292 139.752L304.947 7.76081C308.868 5.96244 313.266 5.48032 317.484 6.38638Z;

            M313.31 13.2753L546.954 327.031C555.849 338.976 549.036 356.104 534.366 358.676L115.141 432.154C105.578 433.83 96.1931 428.397 92.8849 419.269L6.70664 181.506C3.34924 172.243 7.23812 161.914 15.8712 157.166L287.631 7.69628C296.383 2.8826 307.344 5.26411 313.31 13.2753Z;

            M148.165 5.45832L541.821 58.2812C555.123 60.0662 562.926 74.1872 557.359 86.3993L398.945 433.911C394.056 444.635 381.001 448.828 370.783 442.956L15.3716 238.733C5.60277 233.12 2.39622 220.55 8.28273 210.943L128.452 14.8312C132.588 8.08047 140.318 4.40537 148.165 5.45832Z"
          />
        </path>
      </svg>
    </div>
  );
};
