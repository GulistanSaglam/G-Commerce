const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('your_stripe_key')


const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (req, res) => {

    const products = req.body.products;
    let lineItems = [];
    products.forEach((product) => {
        lineItems.push({
            price: product.id,
            quantity: product.quantity,
            // size: product.quantity
        })
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/error",
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000"))
