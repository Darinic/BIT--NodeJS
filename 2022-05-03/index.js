import express from "express";
import fs from "fs/promises";
import { create } from "express-handlebars";
import session from "express-session";

const port = 3000;
const url = "http://localhost:" + port;
let user = { username: "" };
// let clientInfo = [
//   {
//     imone: "",
//     vardPavard: "",
//     adresas: "",
//     telefonas: "",
//     elpastas: "",
//     pvmkodas: "",
//   },
// ];
//handlebars variklio inicijavimas
const app = express();
//handlebars variklio sukurimas
const hbs = create({
  /* config */
});
//esamos direktorijos susigrazinimas
// const __dirname = dirname(fileURLToPath(import.meta.url))

//handlebars variklio prijungimas
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./templates");

// Post metodu perduodami duomenu
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(
  session({
    secret: "authentification",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 86400000, //laikas kiek galios cookies
    },
  })
);

app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  if (req.session.loggedin != undefined && req.session.loggedin) {
    res.redirect(url + "/clients");
    return;
  }

  res.render("login");
});
//Hardokinti prisijungimo duomenys
const credentials = {
  login: "daniil@gmail.com",
  password: "lalaila",
};

app.post("/login-submit", (req, res) => {
  //req.session- tai kas yra ishsaugoma sausaineliuose
  if (parseInt(Object.keys(req.body).length) > 0) {
    if (
      req.body.username != "" &&
      req.body.password != "" &&
      req.body.username === credentials.login &&
      req.body.password === credentials.password
    ) {
      user = { username: req.body.username };
      req.session.loggedin = true;
      res.redirect(url + "/clients");
    } else {
      res.send("Neteisingi prisijungimo duomenys");
    }

    console.log(user);
  } else {
    res.redirect(url); //Peradresavimas
  }
  //req.query tai kas yra perduodama adrese uz zenklo ?
  //req.params tai kas yra perduodama uz kiekvieno slasho
  //req.body tai kas yra perduoddama body metu
});

app.get("/clients", async (req, res) => {
  if (req.session.loggedin != undefined && req.session.loggedin) {
    try {
      const data = await fs.readFile("./database.json", "utf8");

      let masyvas = JSON.parse(data);
      res.render("clients", { user, masyvas });
    } catch {
      res.render("clients", { user });
    }
  } else {
    res.redirect(url);
  }
});

app.get("/logout", (req, res) => {
  if (req.session.loggedin != undefined && req.session.loggedin) {
    req.session.loggedin = false;
    res.redirect(url);
  } else {
    res.redirect(url);
  }
});

app.get("/newclient", (req, res) => {
  if (req.session.loggedin != undefined && req.session.loggedin) {
    res.render("newclient");
  } else {
    res.redirect(url);
  }
});
app.post("/newclient-submit", async (req, res) => {
  if (parseInt(Object.keys(req.body).length) > 0) {
    if (
      req.body.imone != "" &&
      req.body.vardPavarde != "" &&
      req.body.adresas != "" &&
      req.body.telefonas != "" &&
      req.body.elpastas != "" &&
      req.body.pvmkodas != ""
    ) {
      let newclient = {
        imone: req.body.imone,
        vardPavard: req.body.vardPavarde,
        adresas: req.body.adresas,
        telefonas: req.body.telefonas,
        elpastas: req.body.elpastas,
        pvmkodas: req.body.pvmkodas,
      };
      // clientInfo.push(data)
      let json = [];

      try {
        const data = await fs.readFile("./database.json", "utf8");

        let parsedJson = JSON.parse(data);
        parsedJson.push(newclient);
        json = parsedJson;
        // json[0].test = 'Test'

        // json = JSON.stringify(json)
      } catch {
        json.push(newclient);
        console.log("duomenų bazes failas sukurtas");
      }
      await fs.writeFile("./database.json", JSON.stringify(json));
      res.redirect(url + "/clients");
    } else {
      res.send("Neteisingi prisijungimo duomenys");
      // res.send('Neteisingi prisijungimo duomenys')
    }
  } else {
    // res.redirect(url) //Peradresavimas
    res.redirect(url + "/newclient");
  }
});

app.listen(port);
