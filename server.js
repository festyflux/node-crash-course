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


    //Set up a routing system

    let path = './views/';
        switch(req.url) {
            case '/':
                path += 'index.html';
                res.statusCode = 200;
                break;
            case '/about':
                path += 'about.html';
                res.statusCode = 200;
                break;
            case '/about-us':
                res.statusCode = 301;
                res.setHeader('Location', '/about');
                break;
            case '/contact':
                path += 'contact.html';
                res.statusCode = 200;
                break;
            case '/login':
                path += 'login.html';
                res.statusCode = 200;
                break;
            case '/profile':
                path += 'profile.html';
                res.statusCode = 200;
                break;
            case '/register':
                path += 'register.html';
                res.statusCode = 200;
                break;
            default:
                path += '404.html';
                res.statusCode = 404;
                break;
        }

    // let path = './views/';
    // switch(req.url) {
    //     case '/':
    //         path += 'index.html';
    //         break;
    //     case '/about':
    //         path += 'about.html';
    //         break;
    //     case '/contact':
    //         path += 'contact.html';
    //         break;
    //     default:
    //         path += '404.html'
    //         break;
    // }



//Send an html file

fs.readFile(path, (err, data) => {
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


