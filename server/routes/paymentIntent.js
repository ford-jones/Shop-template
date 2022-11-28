const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const router = express.Router()
router.use(cors())

router.post('/pay', async (req, res) => {
  const { email } = req.body
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: 'usd',
    // Verify your integration in this guid by including this parameter
    metadata: { integration_check: 'accept_a_payment' },
    recepient_email: email,
  })
  res.json({ client_secret: paymentIntent['client_secret'] })
})

module.exports = router
