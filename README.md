# Boutique - brut de thé

## Developing

The project is devlop svelte

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Deployment

For the payment we use [Stripe](https://stripe.com) 

### Environment variables

To connect Stripe to your *boutique* you must provide your keys.  
You have two ways to do it.

- 1st export two environment variables in your environment
```
VITE_STRIPE_PUBLIC_KEY='your public key, pk_...'
VITE_STRIPE_SECRET_KEY='your private key, sk_...'
```

- 2nd you can also create an `.env` file
```
VITE_STRIPE_PUBLIC_KEY='your public key, pk_...'
VITE_STRIPE_SECRET_KEY='your private key, sk_...'
```