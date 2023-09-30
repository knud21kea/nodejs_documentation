import fs from 'fs';

function readPage(pagePath) {
  return fs.readFileSync(pagePath.toString());
}

function renderPage(page, config = { String }) {
  const navbar = fs.readFileSync('./public/components/navbar/navbar.html').toString()
    .replace('$CSS_LINK', `<link rel="stylesheet" href="/assets/css/${config.theme}.css">`)
    .replace('$TAB_NAME', config.tabTitle);
  const footer = fs.readFileSync('./public/components/footer/footer.html').toString()
    .replace('$FOOTER_YEAR', `${new Date().getFullYear()}`);

  return navbar + page + footer;
}

export default {
  renderPage,
  readPage,
};
