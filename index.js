var axios = require('axios').default;
var options = {
  method: 'GET',
  url: 'http://api.marketstack.com/v1/intraday?access_key=0532b508f9f5278a5944a0942066308e&symbols=INFY',
  params: { Indices: 'NIFTY 50' },
  headers: {
    'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com',
    'x-rapidapi-key': '0532b508f9f5278a5944a0942066308e',
  },
};

axios
  .request(options)
  .then(function (response) {
    var dataFromResponse = response.data;
    console.log(dataFromResponse);
  })
  .catch(function (error) {
    console.error(error);
  });
