import express, { urlencoded } from 'express';
import templateEngine from './utils/templateEngine.js';

const app = express();
app.use(express.static('public'));
app.use(urlencoded({ extended: true }));

// Pages --------------------------------------------------------------------------

const frontpage = templateEngine.readPage('./public/pages/frontpage/frontpage.html');
const frontpagePage = templateEngine.renderPage(frontpage, { tabTitle: 'NJS: Home' });
app.get('/', ((req, res) => {
  res.send(frontpagePage);
}));

const terminal = templateEngine.readPage('./public/pages/terminal/terminal.html');
const terminalPage = templateEngine.renderPage(terminal, { tabTitle: 'NJS: Terminal' });
app.get('/terminal', ((req, res) => {
  res.send(terminalPage);
}));

const nodejs = templateEngine.readPage('./public/pages/nodejs/nodejs.html');
const nodejsPage = templateEngine.renderPage(nodejs, { tabTitle: 'NJS: Nodejs' });
app.get('/nodejs', ((req, res) => {
  res.send(nodejsPage);
}));

const modules = templateEngine.readPage('./public/pages/nodejs/modules.html');
const modulesPage = templateEngine.renderPage(modules, { tabTitle: 'NJS: Modules' });
app.get('/modules', ((req, res) => {
  res.send(modulesPage);
}));

const variables = templateEngine.readPage('./public/pages/javascript/variables.html');
const variablesPage = templateEngine.renderPage(variables, { tabTitle: 'NJS: Variables' });
app.get('/variables', ((req, res) => {
  res.send(variablesPage);
}));

const functions = templateEngine.readPage('./public/pages/javascript/functions.html');
const functionsPage = templateEngine.renderPage(functions, { tabTitle: 'NJS: Functions' });
app.get('/functions', ((req, res) => {
  res.send(functionsPage);
}));

const loops = templateEngine.readPage('./public/pages/javascript/loops.html');
const loopsPage = templateEngine.renderPage(loops, { tabTitle: 'NJS: Loops' });
app.get('/loops', ((req, res) => {
  res.send(loopsPage);
}));

const restapi = templateEngine.readPage('./public/pages/server/restapi.html');
const restapiPage = templateEngine.renderPage(restapi, { tabTitle: 'NJS: REST' });
app.get('/restapi', ((req, res) => {
  res.send(restapiPage);
}));

const website = templateEngine.readPage('./public/pages/server/website.html');
const websitePage = templateEngine.renderPage(website, { tabTitle: 'NJS: Website' });
app.get('/website', ((req, res) => {
  res.send(websitePage);
}));

const redirect = templateEngine.readPage('./public/pages/server/redirect.html');
const redirectPage = templateEngine.renderPage(redirect, { tabTitle: 'NJS: Redirect' });
app.get('/redirect', ((req, res) => {
  res.send(redirectPage);
}));

const design = templateEngine.readPage('./public/pages/design/design.html');
const designPage = templateEngine.renderPage(design, { tabTitle: 'NJS: Design' });
app.get('/design', ((req, res) => {
  res.send(designPage);
}));

const xss = templateEngine.readPage('./public/pages/xss/xss.html');
const xssPage = templateEngine.renderPage(xss, { tabTitle: 'NJS: XSS' });
app.get('/xss', ((req, res) => {
  res.send(xssPage);
}));

const login = templateEngine.readPage('./public/pages/admin/login.html');
const loginPage = templateEngine.renderPage(login, { tabTitle: 'NJS: Login' });
app.get('/login', ((req, res) => {
  res.send(loginPage);
}));

// API ---------------------------------------------------------------------------

const user = {
  username: 'admin',
  password: '11111',
};

const admin = templateEngine.readPage('./public/pages/admin/admin.html');
const adminPage = templateEngine.renderPage(admin, { tabTitle: 'NJS: Admin' });
app.post('/api/login', ((req, res) => {
  const loginName = req.body.username;
  const loginPassword = req.body.password;
  if (loginName !== user.username || loginPassword !== user.password) {
    res.redirect('/login');
  } else {
    res.send(adminPage);
  }
}));

// Server --------------------------------------------------------------------

// const PORT = 8080;
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log('Server is running on port', PORT));
