'use strict';

const https = require('https');

function httpRequest(params, postData) {
    return new Promise(function(resolve, reject) {
        var req = https.request(params, function(res) {
            var body = [];

            res.on('data', function(chunk) {
                body.push(chunk);
            });

            // resolve on end
            res.on('end', function() {
              resolve({
                body: Buffer.concat(body).toString(),                
                headers: res.headers,
                code: res.statusCode
              });
            });
        });

        // reject on request error
        req.on('error', function(err) {
            reject(err);
        });
        if (postData) {
            req.write(postData);
        }
        // IMPORTANT
        req.end();
    });
}

const headersToLower = (headers) => {
  const lcHeaders = {};
  
  const hKeys = Object.keys(headers);
  const hValues = Object.values(headers);

  hKeys.map((k, i) => { lcHeaders[k.toLowerCase()] = hValues[i] });

  return lcHeaders;
} 

const joinQs = (qsObject) => Object.keys(qsObject).map(function(key) {
    return key + '=' + qsObject[key]
}).join('&');

module.exports.proxy = async (event) => {
  const path = event.pathParameters && event.pathParameters.proxy ? `/${event.pathParameters.proxy}` : "";
  const reqHeaders = event.headers ? headersToLower(event.headers) : {};
  // QS is different for SAM
  const queryString = event.queryStringParameters ? `?${joinQs(event.queryStringParameters)}` : "";
  const postData = event.body ? event.body : "";

  // Modify headers
  delete reqHeaders['host'];
  delete reqHeaders['content-length'];

  reqHeaders['accept-encoding'] = 'identity';

  const options = {
    hostname: 'events.hookdeck.com',
    port: 443,
    path: `/e/${process.env.HOOKDECK_SRC}${path}${queryString}`,
    method: 'POST',
    headers: reqHeaders
  }

  const res = await httpRequest(options, postData);

  if(res.code == 200) {
    return {
      statusCode: 204,
      headers: res.headers
    };
  } else {
    return {
      statusCode: res.code,
      body: res.body,
      headers: res.headers
    }
  }
};