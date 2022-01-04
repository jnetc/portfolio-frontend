// Extra css to prevent flickering page
// Set as close as possible to html tag
export const criticalCSS = `
html[data-theme='light'] {
  --bg-clr: hsl(39, 43%, 90%);
  --primary-clr: hsl(252, 10%, 10%);
}
html[data-theme='dark'] {
  --bg-clr: hsl(252, 10%, 10%);
  --primary-clr: hsl(39, 43%, 90%);
}
html {
  background-color: var(--bg-clr);
  color: var(--primary-clr);
  transition: all .5s ease;
}
  `;
// Check or set theme from the LocalStorage
// Set as close as possible to html tag
export const setInitialTheme = `
function getUserPreference() {
  if(window.localStorage.getItem('theme')) {
    return window.localStorage.getItem('theme')
  }
  return 'dark'
}
document.documentElement.dataset.theme = getUserPreference();
`;
