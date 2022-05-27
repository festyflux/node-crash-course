const express = require('express');
const morgan = require('morgan');

//Create express app
const app = express();

//Register view engine

app.set('view engine', 'ejs');
app.set('views', 'public');


//listen for requests
app.listen(5000);

//Middleware & static files (css)

app.use(express.static('public'));
app.use(morgan('tiny'));

//Render view for ejs files
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Tasty Fried Chicken', snippet: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        {title: 'Chicken Republic', snippet: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'},
        {title: 'KFC', snippet: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'},

    ]

    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a blog post'});
})

app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
})

//Set up route handlers for static html files (As found on views folder)

// app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
//     res.sendFile('./views/index.html', { root: __dirname });
// });

// app.get('/about', (req, res) => {
//     //res.send();
//     res.sendFile('./views/about.html', { root: __dirname });
// });

// app.get('/contact', (req, res) => {
//     //res.send();
//     res.sendFile('./views/contact.html', { root: __dirname });
// });

// app.get('/login', (req, res) => {
//     //res.send();
//     res.sendFile('./views/login.html', { root: __dirname });
// });

// app.get('/profile', (req, res) => {
//     //res.send();
//     res.sendFile('./views/profile.html', { root: __dirname });
// });

// app.get('/register', (req, res) => {
//     //res.send();
//     res.sendFile('./views/register.html', { root: __dirname });
// });

// app.get('/about', (req, res) => {
//     //res.send();
//     res.sendFile('./views/about.html', { root: __dirname });
// });

//Redirects
// app.get('/about-us', (req, res)  => {
//     res.redirect('/about');
// })

//404 Page - This method must be at the bottom, because it fires for every request.
// app.use((req, res) =>{
//     res.status(404).sendFile('./views/404.html', { root: __dirname });
// });