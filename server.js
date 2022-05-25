const http = require('http');
const fs = require('fs');

//Create a server

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type text 
    // res.setHeader('content-type', 'text/html');
    //set response to send to browser
    // res.write('Welcome here');
    // res.end();

// Set header content type html
    res.setHeader('content-type', 'text/html');

//Send an html file

fs.readFile('./views/index.html', (err, data) => {
    if (err) {
        console.log(err);
        res.end();
    } else {
        res.end(data);
    }
})


});

//Initialize the server

// const PORT = 5000

// server.listen(() => {
//     console.log(`Listening for requests on port ${PORT}`);
// })

server.listen(5000, 'localhost', () => {
    console.group('Listening for request on port 5000');
})


