const express = require('express');
const morgan = require('morgan');
const { result } = require('lodash');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { render } = require('express/lib/response');





//Create express app
const app = express();

//Connect to Mongodb

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://festyflux:majesty78514@nodetuts.yhqzj.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("node-tut").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


//Connect to mongo db
const dbURI = 'mongodb+srv://festyflux:majesty78514@nodetuts.yhqzj.mongodb.net/blogdb?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));


//Register view engine

app.set('view engine', 'ejs');
app.set('views', 'public');


//listen for requests


//Middleware & static files (css)

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true
})); // Middleware for accepting form data
app.use(morgan('tiny'));


//
//
//-----ROUTER HANDLER FOR TEMPLATE VIEW STARTS----- 



//Basic routes
// app.get('/', (req, res) => {
//     const blogs = [
//         {title: 'Tasty Fried Chicken', snippet: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
//         {title: 'Chicken Republic', snippet: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'},
//         {title: 'KFC', snippet: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'},

//     ]

//     res.render('index', { title: 'Home', blogs});
    
// });

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

//blog routes
//get all blogs
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result})

        })  
        .then((err) => {
            console.log(err)
        });
});

//create post handler for new blogs
app.post ('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
})

//Display single blog on new page when you click on it from the list
app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', {blog: result, title: 'Blog Details'});
        })
        .catch((err) => {
            console.log(err);
        })
})

//get single blog
app.get('/single-blog', (req, res) => {
    Blog.findById()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
});

//page to create a blog post
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a blog post'});
});

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
});






//-----ROUTER HANDLER FOR TEMPLATE VIEW ENDS----- 
//
//

//-----ROUTER HANDLER FOR STATIC HTML STARTS----- 

//@desc Set up route handlers for static html files (As found on views folder)

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

//-----ROUTER HANDLER FOR STATIC HTML ENDS----- 