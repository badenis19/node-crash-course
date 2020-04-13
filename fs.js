const fs = require('fs'); // fs comes by default with node. Use to create file with content.

// To write file (asynchronous: does not wait)
// fs.writeFile('message.txt', 'Hello There Node', (err) => {
//     if (err) throw err;
//     console.log('file has been written');
// })

console.log("==========")

// To read file
fs.readFile('./message.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})