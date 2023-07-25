const http =  require('http');

const server = http.createServer((req, res) => {
    // set header bisa di sini atau masuk ke dalam kondisi
    if (req.url === '/'){
        // define content-type untuk data yang akan ditampilkan
        res.setHeader('Content-Type', 'text/plain'); // opsi lain: res.writeHead(200, {'Content-Type':'text/plain'})
        // kalo pake opsi kedua berarti ga perlu define statusCodenya lagi krn udh diset 200 untuk semuanya
        res.statusCode = 200;
        res.end('Hi Nancy! This is index page.');
    } else if (req.url === '/product') {
        res.setHeader('Content-Type', 'application/json');
        const product = [
            {
                id: 1,
                name: 'book'
            },
            {
                id: 2,
                name: 'bottle'
            }
        ]
        res.statusCode = 200;
        res.end(JSON.stringify(product)); // kalo cuma pake node js perlu diubah menjadi string dulu
    } else {
        res.setHeader('Content-Type', 'text/plain'); 
        res.statusCode = 404;
        res.end('Sorry Nancy, page not found:(');
    }
});

server.listen(3003, () => {
    console.log('Server running on port 3003');
});