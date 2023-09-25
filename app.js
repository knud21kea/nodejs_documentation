import express, { urlencoded } from 'express';
import templateEngine from './utils/templateEngine.js';

const app = express();
app.use(express.static('public'));
app.use(urlencoded({extended: true}));


const frontpage = templateEngine.readPage('./public/pages/frontpage/frontpage.html');
const frontpagePage = templateEngine.renderPage(frontpage, {
  tabTitle: 'Docs: Home'
});

app.get('/', ((req, res) => {
    res.send(frontpagePage);
  }));

  const terminal = templateEngine.readPage('./public/pages/terminal/terminal.html');
  const terminalPage = templateEngine.renderPage(terminal, {
    tabTitle: 'NJS: Terminal'
  });

  app.get('/terminal', ((req, res) => {
    res.send(terminalPage);
  }));
  
  const nodejs = templateEngine.readPage('./public/pages/nodejs/nodejs.html');
  const nodejsPage = templateEngine.renderPage(nodejs, {
    tabTitle: 'NJS: Variables'
  });

  app.get('/nodejs', ((req, res) => {
    res.send(nodejsPage);
  }));
  
  const variables = templateEngine.readPage('./public/pages/variables/variables.html');
  const variablesPage = templateEngine.renderPage(variables, {
    tabTitle: 'NJS: Variables'
  });

  app.get('/variables', ((req, res) => {
    res.send(variablesPage);
  }));

  const functions = templateEngine.readPage('./public/pages/functions/functions.html');
  const functionsPage = templateEngine.renderPage(functions, {
    tabTitle: 'NJS: Functions'
  });

  app.get('/functions', ((req, res) => {
    res.send(functionsPage);
  }));

  const loops = templateEngine.readPage('./public/pages/loops/loops.html');
  const loopsPage = templateEngine.renderPage(loops, {
    tabTitle: 'NJS: Loops'
  });

  app.get('/loops', ((req, res) => {
    res.send(loopsPage);
  }));

  const design = templateEngine.readPage('./public/pages/design/design.html');
  const designPage = templateEngine.renderPage(design, {
    tabTitle: 'NJS: Design'
  });

  app.get('/design', ((req, res) => {
    res.send(designPage);
  }));

  const modules = templateEngine.readPage('./public/pages/modules/modules.html');
  const modulesPage = templateEngine.renderPage(modules, {
    tabTitle: 'NJS: Modules'
  });

  app.get('/modules', ((req, res) => {
    res.send(modulesPage);
  }));

  const redirect = templateEngine.readPage('./public/pages/redirect/redirect.html');
  const redirectPage = templateEngine.renderPage(redirect, {
    tabTitle: 'NJS: Redirect'
  });

  app.get('/redirect', ((req, res) => {
    res.send(redirectPage);
  }));

  const restapi = templateEngine.readPage('./public/pages/restapi/restapi.html');
  const restapiPage = templateEngine.renderPage(restapi, {
    tabTitle: 'NJS: REST'
  });

  app.get('/restapi', ((req, res) => {
    res.send(restapiPage);
  }));

  const template = templateEngine.readPage('./public/pages/template/template.html');
  const templatePage = templateEngine.renderPage(template, {
    tabTitle: 'NJS: Template'
  });

  app.get('/template', ((req, res) => {
    res.send(templatePage);
  }));

  const login = templateEngine.readPage('./public/pages/login/login.html');
  const loginPage = templateEngine.renderPage(login, {
    tabTitle: 'NJS: Login'
  });

  app.get('/login', ((req, res) => {
    res.send(loginPage);
  }));

  const admin = templateEngine.readPage('./public/pages/admin/admin.html');
  const adminPage = templateEngine.renderPage(admin, {
    tabTitle: 'NJS: Admin'
  });

  app.get('/admin', ((req, res) => {
    res.send(adminPage);
  }));



const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port:', PORT);
});