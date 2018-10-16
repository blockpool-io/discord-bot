const fetch = require("node-fetch");

exports.run = (client, config, message, params) => {
  if (message.channel.id !== config.price_channel.id) {
    message.author.send(`The \`price\` command works only in the following channel: #${config.price_channel.name}`);
    message.delete().catch(err => console.log(err));
    return;
  }
  
  const ticker = params.length ? params[0].toUpperCase() : 'BPL';

  fetch(`https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${ticker}&tsym=BTC`)
    .then(response => response.json())
    .then(data => {
      message.channel.send({
        embed: {
          color: 3977445,
          author: {
            name: `${data.Data.CoinInfo.FullName} price from CryptoCompare:`,
            icon_url: `https://cryptocompare.com${data.Data.CoinInfo.ImageUrl}`,
            url: `https://cryptocompare.com${data.Data.CoinInfo.Url}`
          },
          fields: [{
            name: "Price (BTC)",
            value: Number(data.Data.AggregatedData.PRICE).toFixed(8)
          },
          {
            name: "Volume (24h)",
            value: data.Data.AggregatedData.VOLUME24HOUR.toFixed(8)
          },
          {
            name: "Volume (24h - BTC)",
            value: data.Data.AggregatedData.VOLUME24HOURTO.toFixed(8)
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
