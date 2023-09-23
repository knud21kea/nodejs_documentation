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

  const one = templateEngine.readPage('./public/pages/1/1.html');
  const onePage = templateEngine.renderPage(one, {
    tabTitle: 'Docs: P1'
  });

  app.get('/1', ((req, res) => {
    res.send(onePage);
  }));
  
  const two = templateEngine.readPage('./public/pages/2/2.html');
  const twoPage = templateEngine.renderPage(two, {
    tabTitle: 'Docs: P2'
  });

  app.get('/2', ((req, res) => {
    res.send(twoPage);
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