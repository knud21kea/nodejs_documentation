import express, { urlencoded } from 'express';
import templateEngine from './utils/templateEngine.js';

const app = express();
app.use(express.static('public'));
app.use(urlencoded({ extended: true }));

let loggedIn = false;
let mode = 'dark';

// Pages --------------------------------------------------------------------------

const frontpage = templateEngine.readPage('./public/pages/frontpage/frontpage.html');
app.get('/', ((req, res) => {
  const frontpagePage = templateEngine.renderPage(frontpage, {
    theme: mode, tabTitle: 'NJS: Home',
  });
  res.send(frontpagePage);
}));

const terminal = templateEngine.readPage('./public/pages/terminal/terminal.html');
app.get('/terminal', ((req, res) => {
  const terminalPage = templateEngine.renderPage(terminal, {
    theme: mode, tabTitle: 'NJS: Terminal',
  });
  res.send(terminalPage);
}));

const nodejs = templateEngine.readPage('./public/pages/nodejs/nodejs.html');
app.get('/nodejs', ((req, res) => {
  const nodejsPage = templateEngine.renderPage(nodejs, {
    theme: mode, tabTitle: 'NJS: Nodejs',
  });
  res.send(nodejsPage);
}));

const modules = templateEngine.readPage('./public/pages/nodejs/modules.html');
app.get('/modules', ((req, res) => {
  const modulesPage = templateEngine.renderPage(modules, {
    theme: mode, tabTitle: 'NJS: Modules',
  });
  res.send(modulesPage);
}));

const variables = templateEngine.readPage('./public/pages/javascript/variables.html');
app.get('/variables', ((req, res) => {
  const variablesPage = templateEngine.renderPage(variables, {
    theme: mode, tabTitle: 'NJS: Variables',
  });
  res.send(variablesPage);
}));

const functions = templateEngine.readPage('./public/pages/javascript/functions.html');
app.get('/functions', ((req, res) => {
  const functionsPage = templateEngine.renderPage(functions, {
    theme: mode, tabTitle: 'NJS: Functions',
  });
  res.send(functionsPage);
}));

const loops = templateEngine.readPage('./public/pages/javascript/loops.html');
app.get('/loops', ((req, res) => {
  const loopsPage = templateEngine.renderPage(loops, {
    theme: mode, tabTitle: 'NJS: Loops',
  });
  res.send(loopsPage);
}));

const restapi = templateEngine.readPage('./public/pages/server/restapi.html');
app.get('/restapi', ((req, res) => {
  const restapiPage = templateEngine.renderPage(restapi, {
    theme: mode, tabTitle: 'NJS: REST',
  });
  res.send(restapiPage);
}));

const website = templateEngine.readPage('./public/pages/server/website.html');
app.get('/website', ((req, res) => {
  const websitePage = templateEngine.renderPage(website, {
    theme: mode, tabTitle: 'NJS: Website',
  });
  res.send(websitePage);
}));

const redirect = templateEngine.readPage('./public/pages/server/redirect.html');
app.get('/redirect', ((req, res) => {
  const redirectPage = templateEngine.renderPage(redirect, {
    theme: mode, tabTitle: 'NJS: Redirect',
  });
  res.send(redirectPage);
}));

const design = templateEngine.readPage('./public/pages/design/design.html');
app.get('/design', ((req, res) => {
  const designPage = templateEngine.renderPage(design, {
    theme: mode, tabTitle: 'NJS: Design',
  });
  res.send(designPage);
}));

const xss = templateEngine.readPage('./public/pages/xss/xss.html');
app.get('/xss', ((req, res) => {
  const xssPage = templateEngine.renderPage(xss, {
    theme: mode, tabTitle: 'NJS: XSS',
  });
  res.send(xssPage);
}));

const login = templateEngine.readPage('./public/pages/admin/login.html');
app.get('/login', ((req, res) => {
  const loginPage = templateEngine.renderPage(login, {
    theme: mode, tabTitle: 'NJS: Login',
  });
  res.send(loginPage);
}));

const admin = templateEngine.readPage('./public/pages/admin/admin.html');
app.get('/admin', ((req, res) => {
  const adminPage = templateEngine.renderPage(admin, {
    theme: mode, tabTitle: 'NJS: Admin',
  });
  if (!loggedIn) {
    res.redirect('/login');
  } else {
    res.send(adminPage);
  }
}));

app.get('/theme', ((req, res) => {
  if (mode === 'dark') {
    mode = 'light';
  } else {
    mode = 'dark';
  }
  const frontpagePage = templateEngine.renderPage(frontpage, {
    theme: mode, tabTitle: 'NJS: Home',
  });

  res.send(frontpagePage);
}));

// API ---------------------------------------------------------------------------

const user = {
  username: 'admin',
  password: '11111',
};

app.post('/api/login', ((req, res) => {
  const loginName = req.body.username;
  const loginPassword = req.body.password;
  if (loginName === user.username && loginPassword === user.password) {
    loggedIn = true;
    res.redirect('/admin');
  } else {
    loggedIn = false;
    res.redirect('/login');
  }
}));

// Server --------------------------------------------------------------------

const PORT = 8080;
app.listen(PORT, () => console.log('Server is running on port', PORT));
