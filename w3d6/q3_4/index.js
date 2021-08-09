const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

const PRODUCTS = [
    { id: 1, name: 'item1', description: 'desc1', price: 1 },
    { id: 2, name: 'item2', description: 'desc2', price:2 },
    { id: 3, name: 'item3', description: 'desc3', price: 3 },
    { id:4, name: 'item4', description:'desc4', price: 4 },
    {id:5, name: 'item5', description:'desc5', price: 5}
]

 const CART=[
    { name: 'item1', price: 1, quantity: 2 },
    { name: 'item2', price: 2, quantity: 4 }];
var prodIndex;
app.get('/product/:id', (req, res) => {
     prodIndex= PRODUCTS.findIndex(pr=>pr.id===parseInt(req.params.id));
     if(prodIndex<0){
        res.send("The requested product is not available");
     }
     else{
        res.render("product", {
            id:PRODUCTS[prodIndex].id,
            name:PRODUCTS[prodIndex].name,
            description:PRODUCTS[prodIndex].description,
            price:PRODUCTS[prodIndex].price
            });
     }
});

app.post('/addToCart', (req, res) => {
    //dynamically adding products to cart
    CART.push(PRODUCTS.find(e => e.id === parseInt(req.body.id)));
    res.render("shoppingcart", {
        products: CART
    });
});

app.listen(3000);