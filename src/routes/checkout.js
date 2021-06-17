import Stripe from 'stripe'

export async function get() {
    const stripe = new Stripe('insert your stripe secret key here!')

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Dégaine'
                },
                unit_amount: 2000,
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost/success.html',
        cancel_url: 'http://localhost/cancel.html',
    })

    return {
        "body": session.id
    }
}