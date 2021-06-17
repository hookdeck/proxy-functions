# Cloudflare worker
A simple Cloudflare worker function allowing traffic sent to a custom CloudFlare hosted domain
to be routed to Hookdeck

# Instructions
  * Create a worker in your Cloudflare account and paste the code in the `/woker.js` file.
  * Replace the `hookdeckSrc` variable with the source from your Hookdeck account.
  * Save and deploy.
  * Associate a route to the worker from your domain (A DNS entry must exist and be proxied. The IP address you choose doesn't matter as the name will never resolve to that address).
  * You're good to go!

Here's a [video]().