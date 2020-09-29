const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit);
});

app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'banana', quantity: 1000, price: 100000});
})

app.listen(3000, () => console.log('Listening to port 3000'));
