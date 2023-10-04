const mode = sessionStorage.getItem('mode') ?? 'dark';
if (mode === 'light') {
  document.getElementById('colourTheme').href = '/assets/css/light.css';
} else {
  document.getElementById('colourTheme').href = '/assets/css/dark.css';
}
sessionStorage.setItem('mode', mode);
sessionStorage.setItem('loggedIn', false);

// eslint-disable-next-line no-unused-vars
function switchMode() {
  let currentMode = sessionStorage.getItem('mode');
  if (currentMode === 'light') {
    currentMode = 'dark';
    document.getElementById('colourTheme').href = '/assets/css/dark.css';
  } else {
    currentMode = 'light';
    document.getElementById('colourTheme').href = '/assets/css/light.css';
  }
  sessionStorage.setItem('mode', currentMode);
}
