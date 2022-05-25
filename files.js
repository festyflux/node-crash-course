//@desc Import file system core module
const fs = require('fs');


// READING FILES
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());

// })

// fs.readFile('./docs/blog3.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })
 


//WRITING FILES
// fs.writeFile('./docs/blog2.txt', 'Here is the original text', (err, data)=> {
//     if (err) {
//         console.log(err);
//     }
//     console.log('File written');

// })
 
// fs.writeFile('./assets/README.txt', 'I am a text document', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Success');
// })



//DIRECTORIES
// if (!fs.existsSync('./test')) {
//     fs.mkdir('./test', (err) =>{
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder created');
//     })
// }else {
//     fs.rmdir('./test', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder Deleted');
//     })
// }






//DELETING FILES


if (fs.existsSync('./test/deleteme.txt')) {
    fs.unlink('./test/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File deleted');
    })
}


