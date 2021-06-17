# AWS Lambda - serverless framework
A simple Lambda function allowing traffic sent to it to be routed to Hookdeck.

# Instructions
Check [video instructions here](https://www.loom.com/share/d6516473dcfd4a85b2dca7ed9ea3ac48).

  * Install and setup [serverless](https://www.serverless.com/framework/docs/getting-started/)
  * Edit [`serverless.yml`](aws-lambda/serverless/serverless.yml`), in the custom section, change `hookdeckSrc` with your source ID from your Hookdeck connection in your Dashboard
  * Save and deploy

These next steps assume that you have a domain set up and routable through Route53, and a valid SSL certificate in AWS. 
  * Go to API Gateway, and select `custom domain names` in the left menu
  * Click create, enter the domain name that you'd like to use, and select a valid certificate
  * Select your newly created custom domain and go to API mappings
  * Click `Configure API mapping` > `Add new mapping`, and select your deployed API's name (dev-hd-proxy by default if you didn't change the stage) for API, and `$default` for Stage and save.
  * Go to the Route53 service and choose the hosted zone that matches the domain you configured
  * Click `Crate record`
  * Create an A record with the name of your choosing, and toggle `Alias` to select your API path
  * In the `route traffic to` dropdown, select API Gateway > your region > the service you created
  * Click `Create records`

Your custom domain should now be active.