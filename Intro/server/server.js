const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res)=>{
    //console.log("Request made")
    //console.log(req.url, req.method)
    //setting Headers
    /* res.setHeader("Content-Type", "text/plain")
    res.write('Ola Ninjas')
    res.end() */
    const num = _.random(0,20)
    console.log(num)

    const great = _.once(()=>{
        console.log('Hello')
    })

    great()
    great()

    let path = './views/'
    switch(req.url){
        case '/': path += 'index.html'
            res.statusCode = 200
            break
        case '/about': path += 'about.html'
            res.statusCode = 200
            break
        case '/about-us':
            res.statusCode = 301
            //redirecionamento
            res.setHeader('location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
    }
    res.setHeader("Content-Type", "text/html")
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            //res.write(data)
            res.end(data)
        }
    })
})
server.listen(3000, 'localhost',()=>{
    console.log("Listenig for request at port 3000")
})