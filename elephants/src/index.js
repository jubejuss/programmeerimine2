//lihtne api
// esmalt nimekiri vajalikest node moodulitest
const axios = require('axios'); //aitab andmeid alla laadada
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

const port = 4000;

const terviseUrl =
  'https://opendata.digilugu.ee/opendata_covid19_tests_total.json';
//'https://opendata.digilugu.ee/opendata_covid19_avg_age_by_result.json';

app.use(cors());

// see on test
app.get('/health', (req, res) => {
  res.status(200).json({
    message: 'healthy',
  });
});

// see on päris
app.get('/tervis', async (req, res) => {
  try {
    const healthResponse = await axios.get(terviseUrl);
    console.log(healthResponse.data);
    const data = JSON.stringify(healthResponse.data);
    fs.writeFileSync('tervis.json', data);
    res.status(200).json({
      health: healthResponse.data,
    });
  } catch (error) {
    console.log(error);
  }
});

// see on selleks, et teaks, kas app töötab
app.listen(port, () => {
  console.log('App is running');
});
