import Stripe from 'stripe';

const STRIPE_SECRET_KEY =
    import.meta.env.VITE_STRIPE_SECRET_KEY;

export async function get() {
    const stripe = new Stripe(STRIPE_SECRET_KEY);
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
        success_url: 'http://localhost:3001/success',
        cancel_url: 'http://localhost:3001/cancel',
    });

    return {
        "body": session.id
    };
};