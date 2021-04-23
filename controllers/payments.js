const payments = require('../models/payments');
const totalPrice = require('../models/totalPrices');
const orders = require('../models/orders');
// const cart
const request = require('request');
const url = require('url');
const { nextTick } = require('process');
const carts = require('../models/totalPrices');
require('dotenv').config();

exports.initiatePayment = async (req, res)=>{
    const{priceId, price, email, phone, name} = req.body;
    const tx_ref = Date.now();

    const startPayment = totalPrice.findALL({
        where : {
            id : `${priceId}`,
            price : `${price}`
        }
    })
        .then(startPayment => {
            const amount = startPayment[0].price
            var options = {
                'method': 'POST',
                'url': `${process.env.PAYMENT_API_URL}/payments`,
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.PAYMENT_SECRET_KEY}`
                },
                body: JSON.stringify({
                    "tx_ref": tx_ref,
                    "amount": amount,
                    "currency": "NGN",
                    "redirect_url":`https://pacetimesheet.herokuapp.com/api/payment/verify-payment`,
                    "payment_options":"card",
                    // "payment_plan": planID,
                    "customer":{
                        "email": email,
                        "phonenumber": phone,
                        "name": name
                    },
                    "customizations":{
                        "title":"Pace Time Sheet",
                        "description":"Time is Money",
                        "logo":"https://miro.medium.com/max/624/1*QWo6-O99AZq5sHo8BgeUBg.png"
                    }
                })
            };   
            request(options, (error, response) => {
                if(error){
                    res.status(400).json({status: 'There has been an error', response: err})
                }

                if(response){
                    const addPayment = payments.create({
                        userID : `${id}`,
                        referenceID : `${tx_ref}`,
                        status : `pending`,
                    })
                        .then(addPayment => {
                            return res.status(200).json({status: 'success', response: addPayment});
                        })
                        .catch(err => {
                            return res.status(400).json({status: 'There has been an error', response: err});
                        })
                }
            })
        })
        .catch(err => {
            return res.status(400).json({status: 'There has been an error', response: err});
        })
}

// Payment Verification
exports.verifyPayment = (req, res, next)=>{
    var val = url.parse(req.url, true).query;
    const transaction_id = val.transaction_id;

    var options = {
        'method': 'GET',
        'url': `${process.env.PAYMENT_API_URL}/transactions/${transaction_id}/verify`,
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.PAYMENT_SECRET_KEY}`
        }
    };
    request(options, async (error, response) => { 
        if (error) throw new Error(error);

        if(response){
            const ans = JSON.parse(response.body);
            const {tx_ref, amount, status} = ans.data;

            const checkPaymentStatus = await payments.findALL({
                attributes : ['status']
            },{
                where : {
                    referenceID : `${tx_ref}`
                }
            })
                .then(async changePaymentStatus => {
                    if(checkPaymentStatus[0].status == 'pending'){
                        const changePaymentStatus = await payments.update({
                            status : `Completed`
                        },{
                            where : {
                                transactionID : `${tx_ref}`
                            }
                        })
                            .then(async changePaymentStatus => {
                                const {userID, cakeID, amountPaid} = req.body;
                                const updateOrders = await orders.create({
                                    userID :`${userID}`,
                                    cakeID :`${cakeID}`,
                                    paymentID :`${tx_ref}`,
                                    paymentCompleted :`0`,
                                    orderStatus :`On my way`,
                                    amountPaid :`${amountPaid}`
                                })
                                .then(addOrder => {
                                    const {id} = req.params;
                                    const deleteFromCart = await carts.destroy({
                                        userID : `${id}`
                                    })
                                        .then(addOrder => {
                                            return res.status(200).json({status: 'success', response: req.body});
                                        })
                                        .catch(err => {
                                            return res.status(400).json({status: 'There has been an error', response: err});
                                        });
                                })
                                .catch(err => {
                                    return res.status(400).json({status: 'There has been an error', response: err});
                                });
                            })
                            .catch(err => {
                                return res.status(400).json({status: 'There has been an error', response: err});
                            })
                        
                    }
                })
                .catch(err => {
                    return res.status(400).json({status: 'There has been an error', response: err});
                })
           
        }
        
    });
}