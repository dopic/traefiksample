var http = require('http');

var port = process.env.port || 80;

var server = http.createServer((req, res)=>{       
    res.end(process.env.HOSTNAME);
});

server.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});