let currency, data, baseId;

const currencySelect = document.getElementById('currencySelect');
const form = document.getElementById('calculator');


//! https://api.coinbase.com/v2/prices/:currency_pair/sell can use to calculate the sell price for a pair in real time.

window.onload = () => {


    axios.get(`https://api.coinbase.com/v2/assets/prices`)
        .then(res => {
            if (res.status === 200) {
                data = JSON.parse(res.request.response).data;

                data.forEach(item => {

                    const option = document.createElement('option');
                    option.value = item.base;
                    option.innerText = item.base;

                    currencySelect.append(option);
                });

            } else {
                console.log('api down.')
            };
        }).catch(e => {
            console.log(`error getting data\n${e}`)
        });
};

const getCurrentPrice = async baseId => {

    const getSingle = `https://www.coinbase.com/api/v2/assets/prices/${baseId}?base=usd`;
    let price = 0;

    await axios.get(getSingle)
        .then(res => {

            if (res.status !== 200) {
                console.log(`error getting latest price ${res}`);
            }

            price = res.data.data.prices.latest

        }).catch(e => {
            console.log(`error getting latest price ${e}`);
        });

    return price
};


const calculateResult = async amount => {

    let item;

    for (let i = 0; i < data.length; i++) {
        if (data[i].base === currency) {
            item = data[i]
            break;
        };
    };

    try {

        return await getCurrentPrice(item.base_id) * amount;
    } catch { console.log('error calculating value ') };

};

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const amount = this.elements.coinAmount.value;
    currency = this.elements.currencySelect.value;

    if (amount === '') return;
    if (currency === 'Currencies') return;

    const result = document.getElementById('result');
    result.innerText = `\$${await calculateResult(amount)}`;

});