const http = require('node:http');


http.createServer((request, response)=> {
    response.setHeader('Access-Control-Allow-Origin', '*');
    
    if(request.url === '/users'){
        response.writeHead(
            200,
            {'content-type': 'application/json'}
        );
            response.end(JSON.stringify([{
                name: 'Alex Bessa',
                email: 'alex@email.com'
            } , {
                name: 'Valdiana Bessa',
                email: 'valdiana@email.com'

            } , {
                name: 'Ana Bessa',
                email: 'ana@email.com'
            }]));
            return;
        }
    if(request.url === '/products'){
        response.writeHead(
            200,
            {'content-type': 'application/json'}
        );
        response.end(JSON.stringify([
            {
                product: 'Celular', 
                preco: 5000 
            },
            {
                product: 'TV', 
                preco: 6199
            },
            {
                product: 'Relogio', 
                preco: 300
            }
        ]));
        return;
    }
    response.writeHead(404,{'content-type':'application/json'});

    response.end(JSON.stringify({message: ' Não existente.'}));
}).listen(3000);


