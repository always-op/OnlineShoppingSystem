const express = require('express')
const crypto = require('crypto')
const Razorpay = require('razorpay')
const router = express.Router();

const instance = new Razorpay({
    key_id:'rzp_test_tffDTZ0t78chqy',
    key_secret:'HfhPRBjUWlKKg7IExkYJ32sF'
})

router.post('/order', async(req,res)=>{
    try {
        const options  = {
            amount: 61095,
            currency: 'INR'
        }
        const order = await instance.orders.create(options);
        if(!order) return res.status(500).send('some error occured')
        return res.status(200).json(order)
    } catch (error) {
        res.status(500).json({error})
    }
})


router.post('/verify',async(req,ress)=>{
    try {
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayorderId,
            razorpaySignature,
            amount,
            currency
        } = req.body

        const signature = crypto.createHmac('sha256','HfhPRBjUWlKKg7IExkYJ32sF')
        signature.update(`${orderCreationId}|${razorpayPaymentId}`);
        const digest = signature.digest('hex')

        if(digest!== razorpaySignature) return res.status(400).json({msg:'transaction not valid'})
        const captureResponse  = await instance.payment.capture(
            razorpayPaymentId,
            amount,
            currency
        );

        return res.status(200).json({
            status:'success',
            orderId:razorpayorderId,
            paymentId:razorpayPaymentId,
            captureResponse
        })



    } catch (error) {
        res.status(500).send({error})
    }
})

module.exports = router