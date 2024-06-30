# DigitalHippo - A Modern Fullstack E-Commerce Marketplace for Digital Products

DigitalHippo is built using Next.js 14 with App Router, tRPC, TypeScript, Payload, and TailwindCSS.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/amanmodiii/Digital-Hippo.git
cd Digital-Hippo
```

## Set Up Environment Variables

### Create a .env file in the root directory of your project with the following variables:

```bash
NEXT_PUBLIC_SERVER_URL=your_server_url_or_port
PAYLOAD_SECRET=your_secure_payload_secret
MONGODB_URL=your_mongodb_database_link
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
RESEND_API_KEY=your_resend_api_key
```


## Start the Development Server

```bash
yarn install
yarn dev
```
And you are good to go!

<br>
<br>

## Notes

- **Stripe Setup:** Obtain your STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET from your Stripe account.

- **Resend Setup:** Obtain your RESEND_API_KEY from Resend.com for email sending.

<br>

*Make sure to configure Resend for your production environment to send emails from custom domains.*
