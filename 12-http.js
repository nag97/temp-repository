// http module - built in module
// to create a basic web server
// import http from 'http'
// require is used in nodejs to import modules
// server is an object that listens to client requests and sends responses
// req is the request object that contains information about the client's request
// res is the response object that is used to send a response back to the client
// createServer method is used to create a server
// createServer is called with a callback function that is executed when a request is made to the server


const http = require('http')

const server = http.createServer((req, res) =>{
  if (req.url === '/') {
    res.end("Welcome to our home page")
  }
  if (req.url === '/about') {
    res.end("Here is our short history")
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `)
})

server.listen(5000) 