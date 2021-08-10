const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(session({
    resave:false, 
    saveUninitialized:false, 
    secret:'session salted'
}));
app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.get('/', (req, res) => {
    const date_ob = new Date();
    const hours = date_ob.getHours();
    let style = "night.css";
    if (hours >= 6 && hours < 18) {
        style = "day.css";
    }
    res.render("main",{
        style:style
    });
});
app.post('/result', (req, res) => {
    req.session.name=req.body.name;
    req.session.age=req.body.age;
    res.redirect(303, `/output`);
});
app.get('/output', (req, res) => {
    let name = req.session.name;
    let age = req.session.age;
    if (!name) {
        name = "unknown";
    }
    if (!age) {
        age = "unknown"
    }
    res.send(`Welcome ${name}, age ${age}`);
});

app.use((req, res) => {
    res.status(404).send({
    status: 404,
    error: "Not Found"
    })
   })
app.listen(3000);