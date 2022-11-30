const stripe = require('stripe')('sk_test_xLhH7sntJEJFllhPZwbGU0Sj')
const express = require('express')
const router = express.Router()

// const stripe = Stripe(process.env.STRIPE_KEY)
const domain = 'http://localhost:3000'

router.post('/', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${domain}/checkout?success=true`,
    cancel_url: `${domain}/checkout?canceled=true`,
  })

  res.send({ url: session.url })
})

module.exports = router
