const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const users = ['Asad', 'Riyad', 'Sabbir', 'Mansura', 'Fahad', 'Sumon', 'Rakib'];

app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit);
});

app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'banana', quantity: 1000, price: 100000});
});

app.get('/users/:id', (req, res)=> {
    const id = req.params.id;
    console.log(req.query);
    const name =  users[id];
    res.send({id, name});
})

app.listen(3000, () => console.log('Listening to port 3000'));
