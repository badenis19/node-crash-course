const path = require('path'); // packed with nodejs, to combine path

const fileLocation = path.join(__dirname, 'app.js'); // .join to join path together

const fileName = path.basename(fileLocation);

console.log(fileLocation);
console.log(fileName);
