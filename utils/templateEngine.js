import fs from 'fs';

function readPage(pagePath) {
  return fs.readFileSync(pagePath.toString());
}

function renderPage(page, config = {}) {
  const navbar = fs.readFileSync('./public/components/navbar/navbar.html').toString()
    .replace('$TITLE', config.tabTitle || 'Documentaion');

  const footer = fs.readFileSync('./public/components/footer/footer.html').toString()
    .replace('$FOOTER_TEXT', `Coding by Niki ©${new Date().getFullYear()}`);

  return navbar + page + footer;
}

export default {
  renderPage,
  readPage,
};
