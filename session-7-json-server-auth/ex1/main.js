console.log('Hello World this is NODE JS');
//const h1 = document.querySelector('h1');
//console.log(h1);

const port = 8080
let counter = 0;

const http = require('http');

http.createServer(function(req, res){
    //console.log(req);
    //console.log('==============')
    console.log(`Counter is: ${counter}`);
    counter++;
    const responseText = `<h1>ta -daaa ${counter}</h1>`;
    res.write(responseText);
    res.end();
}).listen(port);