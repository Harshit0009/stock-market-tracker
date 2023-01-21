const express = require('express');
const request = require('request');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  request(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD',
    { json: true },
    (err, response, body) => {
      if (err) {
        return console.log(err);
      }
      res.render('home', { data: body.data });
    }
  );
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
