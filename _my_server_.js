const http = require('http')

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
    res.end('Hello, "My Server"!')  //to display html code need to replace this "text/plain" with this "text/html"
})                                  // 'Hello, <b>"My Server"</b>!'

const PORT = 8080
const HOST = 'localhost' //'127.0.0.1'

server.listen(PORT, HOST, () => {
    console.log(`Server started: http://${HOST}:${PORT}`)
})