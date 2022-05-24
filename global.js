greet = ((name) => {
    console.log(`hello, ${name}`);
})

greet ('mario');
greet ('yoshi');


//Set timeout to execute function after 4 seconds after the previous
setTimeout (() => {
    function greet(name) {
        console.log(`Hi, ${name}`);
    }
    
    greet('sam');
    greet('Nicholas');
}, 4000)


//Set timeout to execute function after 4 seconds after previous 
setTimeout (() => {
    greet = ((name2) => {
        console.log(`Hello, ${name2}`);
    })
    
    greet ('Sandra');
    greet ('John');
    greet ('Smith');
}, 8000)