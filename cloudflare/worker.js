async function handleRequest(request) {
  const url = new URL(request.url)
  const hookdeckSrc = 'src_xxx';

  url.hostname = "events.hookdeck.com";
  url.pathname = `/e/${hookdeckSrc}${url.pathname}`;

  return fetch(url.toString(), request)
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
})