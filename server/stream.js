const http=require('http');
const fs=require('fs');

const server=http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    const readStream=fs.createReadStream('stream.txt');
    readStream.on('error', (err) => {
        console.error('Error reading the file:', err);
        res.statusCode=500;
        res.end('Error reading the file');
    });

    readStream.pipe(res);
});

const PORT=process.env.PORT||3000;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});