// Extra css to prevent flickering page
// Set as close as possible to html tag
export const criticalCSS = `
html[data-theme='light'] {
  background-color: hsl(39, 43%, 90%);
  color: hsl(252, 10%, 10%);
}
html[data-theme='dark'] {
  background-color: hsl(252, 10%, 10%);
  color: hsl(39, 43%, 90%);
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
