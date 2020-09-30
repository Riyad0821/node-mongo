const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

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

//post

app.post('/addUser', (req, res) => {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
    console.log('data received', req.body);
})


app.listen(3000, () => console.log('Listening to port 3000'));
