const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/', (req,res)=> res.send('Hello'));

app.post('/signin', (req, res)=>{
    var postData = req.body;

    res.send(postData);
})

app.listen(3000, ()=> console.log('Server is running!'));
