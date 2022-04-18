import React from 'react';
import './Payment.css'
import PaymentProduct from './Paymentproduct';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'


const Payment = () => {

    const loadScript = (src) => {
        return new Promise(res =>{
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                res(true)
            }
            script.onerror = () =>{
                res(false)
            }
            document.body.appendChild(script)
        })
    }


    const displayRazorpay = async () => {
        try {
            const res = loadScript('https://checkout.razorpay.com/v1/checkout.js')
            if(!res) {
                alert('network error')
                return;
            }

            const {data} = await axios.post('https://onlineshoppingsystem-backend.herokuapp.com/amazon/payment/order')
            if(!data) {
                alert("network error")
                return;
            }

            const {amount, id:order_id,currency} = data

            const options = {
                key:'rzp_test_tffDTZ0t78chqy',
                amount: amount.toString(),
                currency,
                name:'product Payment',
                description:"some description about payment",
                image:"",
                order_id,
                handler: async function (response)  {
                    const data = {
                        orderCreationId: order_id,
                        razorPaymentId: response.razorpay_payment_id,
                        razorOrdertId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                        amount:amount.toString(),
                        currency
                    }
                    
                    const result = await axios.post('https://onlineshoppingsystem-backend.herokuapp.com/success',data)
                    console.log(result.data)
                    
                } ,
                prefill:{
                    name:'Upendra',
                    email:'abc@gmail.com',
                    contact:'0000000000'
                }
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open();
       
        } catch (error) {
            console.log(error.message)
        }
    }




    const {basket} = useSelector((state)=>state.basket)
    let sum = 0

  const total = () => {
    basket.map((product) => {
      sum = sum + product.price
    })
    return sum
  }

  const price = total()

  return (
    <div className='payment'>
        <div className="payment_container">
            <h1>Checkout (2 items)</h1>
            <div className="section">
                <div className="title1">
                    Delievery Address 
                </div>
                <div className="address">
                    <p>A - Pramukh Garden  </p>
                    <p>Amli Road, Silvassa</p>
                </div>
            </div>

            <div className="section">
                <div className="title1">
                    Review Items
                </div>
                <div className="items">
                {basket.map((product) => (
                <div>
                <PaymentProduct  title={product.title} price = {product.price} rating={product.rating} image = {product.image} key={product._id}  />
                </div>
              ))}
                </div>
            </div>

            <div className="section">
            <div className='to_pay'>To Pay : <strong>${price}</strong></div>
 
                <div className="methods">

                    
                    <button className='btn' onClick={displayRazorpay} >PURCHASE</button>
                    
                </div>
            </div>

        </div>
    </div>
  );
};

export default Payment;
