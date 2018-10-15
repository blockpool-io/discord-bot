const fetch = require("node-fetch");

exports.run = (client, config, message, params) => {
  if (params.length < 1) return;
  
  const ticker = params[0].toUpperCase();

  fetch(`https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${ticker}&tsym=BTC`)
    .then(response => response.json())
    .then(data => {
      message.channel.send({
        embed: {
          color: 3977445,
          title: `Latest ${data.Data.CoinInfo.FullName} price from CryptoCompare:`,
          fields: [{
            name: "Price (BTC)",
            value: Number(data.Data.AggregatedData.PRICE).toFixed(8).toString()
          },
          {
            name: "Volume (24h)",
            value: data.Data.AggregatedData.VOLUME24HOUR.toString()
          },
          {
            name: "Percent Change (24h)",
            value: `${Number(data.Data.AggregatedData.CHANGEPCT24HOUR).toFixed(2)}%`
          }]
        }
      });
    })
    .catch(error => console.error(error))
};

exports.conf = {
  "permlvl": 0
};

exports.help = {
  name: 'price',
  description: 'gets the latest price for the given ticker',
  usage: 'price <ticker>'
};
