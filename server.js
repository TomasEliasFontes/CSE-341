const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes/professional');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// 1) Sirve archivos estáticos desde frontend/
app.use(express.static(path.join(__dirname, 'frontend')));

// 2) Para la ruta raíz, devuelve index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'))
);

app.use('/professional', professionalRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, '0.0.0.0', () => console.log(`Connected to DB and listening on port ${port}`));
  }
});
