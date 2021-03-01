const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/dist/${web-sistema-porto}`));

app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/${web-sistema-porto}/index.html`));
});

app.listen(process.env.PORT || 8080);
