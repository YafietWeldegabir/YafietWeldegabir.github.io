const express = require('express');
const app = express();

app.use(express.urlencoded());

app.use('/', (req, res,next) => {
 res.send(`<form method="POST" action="/result">
 <label>Name</label>
 <input type="text" name="name">
 <label>Age</label>
 <input type="number" name="age">
 <input type="submit" value="Submit Query">
</form>`);
});


app.use('/result', (req, res, next) => {
    let name=req.body.name;
    let age=req.body.age;
    res.send(`Welcome ${name} age: ${age}`)
});

app.listen(3000);