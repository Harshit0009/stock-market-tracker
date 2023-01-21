const express = require('express');
const request = require('request');
const app = express();
const port = 8000;

app.get('/stock/:ticker', (req, res) => {
  const ticker = req.params.ticker;
  const apiKey = '0532b508f9f5278a5944a0942066308e';
  const url = `https://marketstack.com/v1/eod?access_key=${apiKey}&symbols=${ticker}`;
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.render('stock', { status: 'success', data: data });
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
