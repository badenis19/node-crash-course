const url = require('url');
const address = "https://www.youtube.com/watch?v=zQRrXTSkvfw";
const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host); // will return the host
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);