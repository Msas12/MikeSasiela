// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
  );

  // contact route loads contact.html
  app.get('/contact', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/contact.html'))
  );

  // projects route loads blog.html
  app.get('/projects', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/projects.html'))
  );
};