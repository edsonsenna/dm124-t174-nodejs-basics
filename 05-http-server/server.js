const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 3000;

fs.readFile('./index.html', 'utf8', (err, data) => {

    function requestHandler(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(data);  
        response.end();
    }

    http.createServer(requestHandler)
        .listen(port, () => {
            console.log(`Server up on http://${host}:${port}`);
        });
    
});



