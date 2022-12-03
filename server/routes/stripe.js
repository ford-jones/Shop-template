const stripe = require('stripe')('sk_test_xLhH7sntJEJFllhPZwbGU0Sj')
const express = require('express')
const router = express.Router()

// const stripe = Stripe(process.env.STRIPE_KEY)
const domain = 'http://localhost:3000'

router.post('/create-checkout-session', async (req, res) => {
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }
  })

  console.log('route hit!')
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `${domain}/payment_success`,
    cancel_url: `${domain}/cart`,
  })

  res.send({ url: session.url })
})

module.exports = router