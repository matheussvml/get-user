const http = require('node:http');


http.createServer((request, response)=> {
    response.writeHead(200,{'content-type':'application/json'});
    response.end(JSON.stringify({
    name: 'Alex Bessa',
    email: 'alex@email.com'
}));
}).listen(3000);


