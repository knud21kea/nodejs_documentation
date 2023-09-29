/* eslint-disable no-unused-vars */
function swap() {
  const element = document.getElementById('container');
  if (element.classList.contains('dark')) {
    element.classList.remove('dark');
    element.classList.add('light');
  } else {
    element.classList.remove('light');
    element.classList.add('dark');
  }
}
