const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create a schema. Schema defines the structure of the document.
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });


//Create a model based on the blog schema above  to provide an interface by which to communicate with the db collection | Name of models are given a capital letter. | Singularize the model name as the first argument in the model
const Blog = mongoose.model('Blog', blogSchema);

//Export the model so it can be used elsewhere in the project 
module.exports = Blog;