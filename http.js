const http = require('http'); // built in nodes
const path = require('path');
const fs = require('fs');

// To create a server (req: what is get from user & res is what we send to user)
const server = http.createServer((req, res) => {

  if (req.url === "/") {
    // to read html file
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) throw err;

      res.writeHead(200, { 'Content-Type': 'text/html' }) // info sent to the header
      res.write(data); // to render the HTML page
      res.end();
    });
  }

  if (req.url === "/user") {
    res.write("<h1>Welcome You</h1>") // to display response to user once connected (http://localhost:3000/)
    res.end(); // to close the response (needed)
  }
});

// listen to request made by server
server.listen(3000, () => console.log("Server is up and running.."));