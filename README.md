# Hookdeck proxy functions
This repository contains a collection of cloud proxy functions for Hookdeck.

There are a few use cases for these functions:
  * Receive traffic on an endpoint that they control first
  * Use a custom domain name
  * Preprocess payloads before sending them to Hookdeck

# Supported clouds
Each directory has its own README file with its instructions for deployment.
We currently offer functions for the following:
  * AWS
    * Lambda (A lambda function)
      * serverless via serverless.com deployment ([`aws-lambda/serverless/`](`aws-lambda/serverless/`))
      * [SAM](https://docs.aws.amazon.com/serverless-application-model/index.html) deployment ([`aws-lambda/sam/`](`aws-lambda/sam/`))
    * (coming soon) CloudFront function
  * CloudFlare workers ([`cloudflare/`](`cloudflare/`))

# Contribute
Simply submit a PR against this repo.