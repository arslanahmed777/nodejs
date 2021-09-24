const http = require('http');
const PORT = 5000;
const server = http.createServer()//creating server


server.on('request' ,(req,res)=>{
    if(req.url == '/')
    {
        res.writeHead(200,{
            'Content-Type':'application/json',
        })
        res.end(JSON.stringify({name:"arslan"}))
    }else if(req.url == '/friends')
    {    
        res.setHeader('Content-Type','text/html');
        res.write('<h1>asdfasdfdsa</h1>');
        res.end('<h1>asdfdsf</h1>');
    }
    else{
        res.statusCode = 404;
        res.end();
    }
})

server.listen(PORT,()=>{
    console.log(`lisnineng on on port ${PORT}`);
})// 127.0.0.1 => localhost