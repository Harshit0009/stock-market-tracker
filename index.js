const fs = require('fs');
var axios = require('axios').default;
const express = require('express');
const app = express();
// app.use(express.json());
const stockdata = require('node-stock-data');
const arrTicker = ['CSCO', 'AAPL', 'GOOG', 'AMZN', 'MSFT', 'TSLA'];
var options = {
  method: 'GET',
  url: 'http://api.marketstack.com/v1/intraday?access_key=128f095c0774d10197f864bdb4253645&symbols=AMZN',
  // params: { Indices: 'NIFTY 50' },
  // headers: {
  //   'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com',
  //   'x-rapidapi-key': '0532b508f9f5278a5944a0942066308e',
  // },
};

axios
  .request(options)
  .then((response) => {
    const data = response.data;
    const json = JSON.stringify(data);
    fs.writeFileSync('stockdata.json', json, 'utf8');
  })
  .catch((error) => {
    console.log(error);
  });

// axios
//   .request(options)
//   .then(function (response) {
//     var dataFromResponse = response.data;
//     console.log(dataFromResponse);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// Get the latest end of day stock information for Boeing (BA)
// stockdata
//   .stocks({
//     API_TOKEN: '0532b508f9f5278a5944a0942066308e',
//     options: {
//       limit: 1,
//       symbols: 'AAPL',
//     },
//   })
//   .then((response) => {
//     const ans = response;
//     console.log(ans);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
app.use(express.json());
// const data = JSON.parse(fs.readFileSync(`stockdata.json`));

// const getThisStock = (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     message: { data },
//   });
// };

// app.get('/stockdata', getThisStock);

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on the port ${port}...`);
});
