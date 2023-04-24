const stripe = require('stripe')(process.env.STRIPE_SECRET);
const collect = require('collect.js');
const axios = require('axios').default;
const { getShippingCountries, getPaymentMethods } = require('./util/stripe');

exports.handler = async (event) => {
    // get all available products
    const productsJSON = await axios.get(`${process.env.URL}/products.json`);
    const products = productsJSON.data.products;
    const settingsJSON = await axios.get(`${process.env.URL}/settings.json`);
    const settings = settingsJSON.data.settings;
    const basket = JSON.parse(event.queryStringParameters.products);
    const items = [];

    collect(basket).each((item) => {
        // get the orinal product data
        const product = collect(products).where('id', item.id).first();
        // build productData array for stripe
        const productData = {
            name : product.title
        };
        // build up the product description
        const productDescription = collect(item.variants).pluck('value').join(', ');
        // add if description exists
        if (productDescription) productData.description = productDescription;

        items.push({
            price_data: {
                currency: settings.currency_code,
                product_data: productData,
                unit_amount: product.price * 100,
            },
            adjustable_quantity: {
                enabled: true,
                minimum: 1,
                maximum: 99,
            },
            quantity: item.quantity,
        });
    });

    const session = await stripe.checkout.sessions.create({
        success_url: `${process.env.URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.URL}/cart?cancel`,
        allow_promotion_codes: true,
        payment_method_types: getPaymentMethods(),
        billing_address_collection: 'auto',
        shipping_address_collection: {
            allowed_countries: getShippingCountries(),
        },
        line_items: items,
        mode: 'payment',
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            stripe_key: process.env.STRIPE_KEY,
            sessionId: session.id
        }),
    }
};