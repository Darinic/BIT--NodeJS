import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import { readFile } from "fs";
import { create } from 'express-handlebars';

const app = express();
const hbs = create({/* config */})
const __dirname = dirname(fileURLToPath(import.meta.url));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './templates');

// const credentials = {
//   login: "daniil@gmail.com",
//   password: "labas1234",
// };

// try {
//   await fs.access("./database.json");
// } catch {
//   await fs.writeFile('./database.json', JSON.stringify(duomenys))
// }


// const fileNames = await fs.readFile('./database.json', 'utf8')

// let fileNamesObject =JSON.parse(fileNames)

//Router

app.get("/", function (req, res) {
  let name = 'Antanas'
  // res.sendFile(__dirname + "/templates/forma.html"); //jeigu tiesiog html failą siųsti

res.render('forma', {name, indeksas: 12})
  //application/json
});

app.get("/loop", (req, res) => {
  let variables = {
    vardas: 'Julijus',
    pavarde: 'Cezaris',
    skaiciai: [20, 15, 100, 99999],
    yra: 'eilute yra',
    nera: false,
    objektas: {
      tipas: 'Automobilis',
      metai: 1990,
      ta: '2023-12-01'
    },
    alkanas: false
  }
  res.render('loop', variables)
})

app.get("/duomenys", function (req, res) {
  res.sendFile(__dirname + "/templates/laukelis.html");
  // await fs.writeFile('./database.json', JSON.stringify(req))
  //application/json
});

app.get("/duomenu-siuntimas", function (req, res) {
  if (parseInt(Object.keys(req.query).length) > 0) {
    res.send("Pavyko nusiųsti duomenis");
  } else {
    res.send("Nepavyko nusiųsti duomenis");
  }
});

// console.log(duomenys);
// app.get("/params/:perduodamas", function (req, res) {
//   // req.params perduodamas parametrai irasyti po pasvyrojo bruksnio AudioProcessingEventreq.
//   // query perduodami url query parametrai
//   res.send("<h1>Params</h1>");
// });

app.get("/client-submit", async (req, res) => {
  // res.status(404)
  // res.send('puslapis nerastas')
  // res.send('<form><input/></form>') -hardcodintas
  if (parseInt(Object.keys(req.query).length) > 0) {

    let json = [];

    try {
      const data = await fs.readFile('./database.json', 'utf8')

      let parsedJson = JSON.parse(data)
      parsedJson.push(req.query)
      json = parsedJson
      // json[0].test = 'Test'

      // json = JSON.stringify(json)
    } catch {
      json.push(req.query)
      console.log('duomenų bazes failas sukurtas')
    }
    await fs.writeFile('./database.json', JSON.stringify(json))


    res.send('Duomenys sekmingai priimti')


    // if (
    //   req.query.login != "" &&
    //   req.query.password != "" &&
    //   req.query.login === credentials.login &&
    //   req.query.password === credentials.password
    // ) {
    //   res.redirect("http://localhost:3000/clients");
    // } else {
    //   res.send("Neteisingi prisijungimo duomenys");
    // }
  } else {
    res.send("nera gauta jokių duomenų");
  }
});

app.get("/clients", async (req, res) => {
  const data = await fs.readFile('./database.json', 'utf8')

  let masyvas = JSON.parse(data)
  let html = `<table>
              <thead>
              <th>Vardas</th>
              <th>Pavarde</th>
              <th>Adresas</th>
              <th>Telefonas</th>
              <th>El paštas</th>
              </thead>
              <tbody>`
  masyvas.forEach(value => {
    html += `<tr>
    <td>${value.vardas}</td>
    <td>${value.pavarde}</td>
    <td>${value.adresas}</td>
    <td>${value.telefonas}</td>
    <td>${value.elpastas}</td>
    </tr>`
  })
html += '</tbody> </table>'
  res.send(html)
//   let html = '<table>';
// fileNamesObject.forEach(value => {
//   html += '<tr>'
//   html += '<td>{value.vardas}</td>'
//   html += '</tr>'
// })
  // res.send("Klientai", html);
});

// app.get('/query', function (req, res) {
//   // https://domenas.com/?parametras=test&parametras2=6avom&20antra%20parametra
//   // Pries pirma parametra visuomet zymimas klaustuko simbolis, o po jo kiekvienas parametras zymimas & simboliu
//   //req query perduodami url query parametrai
//     res.send('<h1>Query</h1>')
// })






app.listen(3000);
