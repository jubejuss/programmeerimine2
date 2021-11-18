const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

const logger = (req, res, next) => {
  let { firstName } = req.body;
  if (!firstName) {
    firstName = 'Peeter';
  }
  if (firstName === 'Vello') {
    return res.status(401).json({
      message: 'Vello, mine koju ...',
    });
  }
  res.locals.firstName = firstName;
  return next();
};

app.use(logger);

app.post('/', (req, res) => {
  return res.status(200).json({
    message: res.locals.firstName,
  });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
