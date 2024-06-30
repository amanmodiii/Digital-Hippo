# DigitalHippo - A Modern Fullstack E-Commerce Marketplace for Digital Products

Built with the Next.js 14 App Router, tRPC, TypeScript, Payload & Tailwind

## Getting started

To get started with this project, run

```bash
  git clone https://github.com/amanmodiii/Digital-Hippo.git
```

and create a `.env` file with 5 variables:

`NEXT_PUBLIC_SERVER_URL`= port number or url

`PAYLOAD_SECRET`= anything which is secure

`MONGODB_URL`=  Database link

`STRIPE_SECRET_KEY`= Get from stripe for accepting payments

`STRIPE_WEBHOOK_SECRET`= Get from Stripe->webhooks

`RESEND_API_KEY`= Get from Resend.com for sending emails.


**NOTE :** resend only allows mails to be sent from custom domains, so here with resend's default mail, I can only send mails to my personal account. Setup your resend dashboard when deploying for production. 

