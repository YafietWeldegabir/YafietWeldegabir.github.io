const express = require('express');
const app = express();

app.use(express.urlencoded());

app.use('/', (req, res,next) => {
 res.send("<form action=result method=post><label>Name: <input name=name type=text></label><label>Age<input name=age type=number></label><button type=submit>Submit Query</button></form>");
});


app.use('/result', (req, res, next) => {
    let name=req.body.name;
    let age=req.body.age;
    res.send(`Welcome ${name} age: ${age}`)
});

app.listen(3000);