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
  
  const variables = templateEngine.readPage('./public/pages/variables/variables.html');
  const variablesPage = templateEngine.renderPage(variables, {
    tabTitle: 'NJS: Variables'
  });

  app.get('/variables', ((req, res) => {
    res.send(variablesPage);
  }));

  const three = templateEngine.readPage('./public/pages/3/3.html');
  const threePage = templateEngine.renderPage(three, {
    tabTitle: 'Docs: P3'
  });

  app.get('/3', ((req, res) => {
    res.send(threePage);
  }));



const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port:', PORT);
});