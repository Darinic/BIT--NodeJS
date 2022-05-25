// import http from 'http'

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//Express objekto inicijavimas
import express from 'express'

const app = express()

//Router
app.get('/', function (req, res) {
  res.send('Titulinis')
})
app.get('/home', function (req, res) {
    res.json('Namai')
    //application/json
  })
app.get('/pirkti/:id', function (req, res) {
    console.log(req.params.id)
    res.send('Apie mus')
})

//metodai kuriuos naudosime siame kurse
// .get()
//.post()
//.delete()
//.put()

//Sukuria serveri priskiriami jam routerius
app.listen(3000)