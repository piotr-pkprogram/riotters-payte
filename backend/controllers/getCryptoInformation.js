import axios from 'axios';

const getCryptoData = async (res) => {
    let response = null;
    try {
        response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
            },
        });
    } catch(ex) {
        response = null;
        // error
        res.send(ex);
    }

    return response;
}

export const getAllCryptoCurrencies = async (req, res, err) => {
    const response = await getCryptoData();

    if (response) {
        const json = response.data;
        res.json(json.data);
    }
};

export const getCryptoCurrencyBySymbol = async (req, res, err) => {
    const response = await getCryptoData();

    if (response) {
        const symbol = req.params.symbol;

        const json = response.data;
        const currencyData = json.data.find(currency => currency.symbol.toLowerCase() === symbol.toLowerCase());
        res.json(currencyData);
    }
};