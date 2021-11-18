const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
app.locals.title = 'My App';

const logger = (req, res, next) => {
  console.dir(app.locals.title);
  console.dir(req.protocol === 'https');
  next();
};

app.use(logger);

app.get('/', (req, res) => {
  res.status(200).json({
    message: app.locals.title,
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
