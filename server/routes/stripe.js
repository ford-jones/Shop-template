const stripe = require('stripe')('sk_test_xLhH7sntJEJFllhPZwbGU0Sj')
const express = require('express')
const router = express.Router()

const domain = 'http://localhost:3000'

router.post('/create-checkout-session', async (req, res) => {
  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.unique_name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }
  })

  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: { allowed_countries: ['US', 'NZ', 'AU'] },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: { amount: 0, currency: 'usd' },
          display_name: 'Free shipping',
          delivery_estimate: {
            minimum: { unit: 'business_day', value: 5 },
            maximum: { unit: 'business_day', value: 7 },
          },
        },
      },
    ],
    line_items,
    mode: 'payment',
    success_url: `${domain}/payment_success`,
    cancel_url: `${domain}/cart`,
  })

  res.send({ url: session.url })
})

module.exports = router
